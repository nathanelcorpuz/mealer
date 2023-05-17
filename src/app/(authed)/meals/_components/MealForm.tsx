"use client";

import Dropdown from "@/components/Dropdown";
import Form from "@/components/Form";
import Heading from "@/components/Heading";
import TextArea from "@/components/TextArea";
import { UserData } from "@/lib/types";
import useMealFormDropdowns from "../_utils/useMealFormDropdowns";
import Button from "@/components/Button";
import { useState } from "react";

export default function MealForm({
	user,
	mealId,
}: {
	user: UserData;
	mealId?: string;
}) {
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

	return (
		<Form>
			<Heading>New Meal</Heading>
			<Dropdown
				label="Day of week"
				selections={daysOfWeek}
				controls={controls.dayOfWeekDropdownControls}
			/>
			<Dropdown
				label="Time of day"
				selections={timesOfDay}
				controls={controls.timeOfDayDropdownControls}
			/>
			<Dropdown
				label="Select a recipe"
				selections={recipes}
				controls={controls.recipeDropdownControls}
			/>
			<TextArea
				labelText="Notes"
				labelProps={{ htmlFor: "notes" }}
				textAreaProps={{
					id: "notes",
					value: notes,
					onChange: (e) => setNotes(e.target.value),
				}}
			/>
			<Button>Submit</Button>
		</Form>
	);
}
