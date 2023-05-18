"use client";

import Dropdown from "@/components/Dropdown";
import Form from "@/components/Form";
import Heading from "@/components/Heading";
import TextArea from "@/components/TextArea";
import {
	DayOfWeek,
	DropdownSelection,
	EditMeal,
	MutationResult,
	NewMeal,
	TimeOfDay,
	UserData,
} from "@/lib/types";
import useMealFormDropdowns from "../_utils/useMealFormDropdowns";
import Button from "@/components/Button";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import ErrorText from "@/components/ErrorText";
import BackButton from "@/components/BackButton";
import capitalize from "@/lib/capitalize";
import Link from "next/link";

export default function MealForm({
	user,
	forcedDayOfWeek,
	mealId,
	mutationFn,
	setIsModalOpen,
}: {
	user: UserData;
	forcedDayOfWeek?: DayOfWeek;
	mealId?: string;
	mutationFn: any;
	setIsModalOpen?: Dispatch<SetStateAction<boolean>>;
}) {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn,
		onSuccess: () => queryClient.invalidateQueries(["user"]),
	});

	const pathname = usePathname();

	const router = useRouter();

	const meal = user.meals.find((meal) => meal._id === mealId);

	const recipeId = meal?.recipeId._id;

	const defaultValues = {
		dayOfWeek: forcedDayOfWeek || meal?.dayOfWeek,
		timeOfDay: meal?.timeOfDay,
		recipeId,
	};

	const forcedDayOfWeekSelection: DropdownSelection = {
		value: forcedDayOfWeek || "",
		label: capitalize(forcedDayOfWeek || ""),
	};

	const [notes, setNotes] = useState((meal && meal.notes) || "");

	const { daysOfWeek, timesOfDay, recipes, controls } = useMealFormDropdowns({
		userRecipes: user.recipes,
		defaultValues,
	});

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const {
			dayOfWeekDropdownControls,
			timeOfDayDropdownControls,
			recipeDropdownControls,
		} = controls;

		const payload: NewMeal | EditMeal = {
			_id: mealId,
			dayOfWeek:
				forcedDayOfWeek ||
				(dayOfWeekDropdownControls.selection.value as DayOfWeek),
			recipeId: recipeDropdownControls.selection.value,
			timeOfDay: timeOfDayDropdownControls.selection.value as TimeOfDay,
			notes,
		};

		const result = (await mutation.mutateAsync(
			payload as any
		)) as MutationResult;

		if (result.isSuccess && !forcedDayOfWeek) {
			router.back();
		}
		if (result.isSuccess && forcedDayOfWeek) {
			setIsModalOpen && setIsModalOpen(false);
		}
	};

	return (
		<Form props={{ onSubmit }}>
			<div className="flex justify-between">
				<Heading variant="h3">
					{pathname.includes("edit") ? "Edit meal" : "New meal"}
				</Heading>
				{!forcedDayOfWeek ? (
					<BackButton isHoverWhite />
				) : (
					<Button
						variant="secondary"
						classOverrides="self-start hover:bg-white"
						props={{
							type: "button",
							onClick: () => setIsModalOpen && setIsModalOpen(false),
						}}
					>
						Back
					</Button>
				)}
			</div>
			<Dropdown
				disabled={mutation.isLoading}
				label="Day of week"
				forcedSelection={forcedDayOfWeek ? forcedDayOfWeekSelection : null}
				selections={daysOfWeek}
				controls={controls.dayOfWeekDropdownControls}
			/>
			<Dropdown
				disabled={mutation.isLoading}
				label="Time of day"
				selections={timesOfDay}
				controls={controls.timeOfDayDropdownControls}
			/>
			<Dropdown
				disabled={mutation.isLoading}
				label="Select a recipe"
				selections={recipes}
				controls={controls.recipeDropdownControls}
			/>
			{user.recipes.length === 0 ? (
				<p className="text-sm italic">
					No recipes yet, add one{" "}
					<Link className="font-bold text-emerald-700" href="/recipes/new">
						here
					</Link>
				</p>
			) : null}
			<TextArea
				labelText="Notes"
				labelProps={{ htmlFor: "notes" }}
				textAreaProps={{
					disabled: mutation.isLoading,
					id: "notes",
					value: notes,
					onChange: (e) => setNotes(e.target.value),
				}}
			/>
			<Button disabled={mutation.isLoading}>Submit</Button>
			{mutation.isError && (
				<ErrorText>{(mutation.error as Error).message}</ErrorText>
			)}
		</Form>
	);
}
