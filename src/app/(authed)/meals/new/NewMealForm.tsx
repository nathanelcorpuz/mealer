"use client";

import Dropdown from "@/components/Dropdown";
import Form from "@/components/Form";
import Heading from "@/components/Heading";
import TextArea from "@/components/TextArea";
import { UserData } from "@/lib/types";
import useNewMealFormDropdowns from "./useNewMealFormDropdowns";
import Button from "@/components/Button";

export default function NewMealForm({ user }: { user: UserData }) {
	const { daysOfWeek, timesOfDay, recipes, controls } = useNewMealFormDropdowns(
		{ userRecipes: user.recipes }
	);

	return (
		<Form>
			<Heading>New Meal</Heading>
			<Dropdown
				label="Day of week"
				options={daysOfWeek}
				controls={controls.dayOfWeekDropdownControls}
			/>
			<Dropdown
				label="Time of day"
				options={timesOfDay}
				controls={controls.timeOfDayDropdownControls}
			/>
			<Dropdown
				label="Select a recipe"
				options={recipes}
				controls={controls.recipeDropdownControls}
			/>
			<TextArea
				labelText="Notes"
				labelProps={{ htmlFor: "notes" }}
				textAreaProps={{ id: "notes" }}
			/>
			<Button>Submit</Button>
		</Form>
	);
}
