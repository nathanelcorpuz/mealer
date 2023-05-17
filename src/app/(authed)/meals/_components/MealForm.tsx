"use client";

import Dropdown from "@/components/Dropdown";
import Form from "@/components/Form";
import Heading from "@/components/Heading";
import TextArea from "@/components/TextArea";
import { DayOfWeek, NewMeal, TimeOfDay, UserData } from "@/lib/types";
import useMealFormDropdowns from "../_utils/useMealFormDropdowns";
import Button from "@/components/Button";
import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { newMealMutator as mutationFn } from "@/lib/mutators";
import { useRouter } from "next/navigation";
import ErrorText from "@/components/ErrorText";

export default function MealForm({
	user,
	mealId,
}: {
	user: UserData;
	mealId?: string;
}) {
	const mutation = useMutation({ mutationFn });

	const router = useRouter();

	const meal = user.meals.find((meal) => meal._id === mealId);

	const recipeId = meal?.recipeId._id;

	const defaultValues = {
		dayOfWeek: meal?.dayOfWeek,
		timeOfDay: meal?.timeOfDay,
		recipeId,
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

		const payload: NewMeal = {
			dayOfWeek: dayOfWeekDropdownControls.selection.value as DayOfWeek,
			recipeId: recipeDropdownControls.selection.value,
			timeOfDay: timeOfDayDropdownControls.selection.value as TimeOfDay,
			notes,
		};

		const result = await mutation.mutateAsync(payload);

		if (result.isSuccess) router.push("/meals");
	};

	return (
		<Form props={{ onSubmit }}>
			<Heading>New Meal</Heading>
			<Dropdown
				disabled={mutation.isLoading}
				label="Day of week"
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
