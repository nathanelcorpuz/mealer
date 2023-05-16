"use client";

import Dropdown from "@/components/Dropdown";
import Form from "@/components/Form";
import Heading from "@/components/Heading";
import TextArea from "@/components/TextArea";
import useDropdown from "@/hooks/useDropdown";
import capitalize from "@/lib/capitalize";
import {
	daysOfWeek as daysOfWeekConst,
	timesOfDay as timesOfDayConst,
} from "@/lib/constants";
import { DayOfWeek, TimeOfDay, UserData } from "@/lib/types";

interface DayOfWeekDropdownSelection {
	value: DayOfWeek | "empty";
	label: string;
}

interface TimeOfDayDropdownSelection {
	value: TimeOfDay | "empty";
	label: string;
}

interface RecipeDropdownSelection {
	value: string;
	label: string;
}

export default function NewMealForm({ user }: { user: UserData }) {
	const daysOfWeek: DayOfWeekDropdownSelection[] = daysOfWeekConst.map(
		(day) => ({
			value: day,
			label: capitalize(day),
		})
	);

	const timesOfDay: TimeOfDayDropdownSelection[] = timesOfDayConst.map(
		(time) => ({
			value: time,
			label: capitalize(time),
		})
	);

	const recipes: RecipeDropdownSelection[] = user.recipes.map(
		({ _id, name }) => ({
			value: _id,
			label: name,
		})
	);

	const { controls: dayOfWeekDropdownControls } = useDropdown({
		label: "",
		value: "empty",
	});
	const { controls: timeOfDayDropdownControls } = useDropdown({
		label: "",
		value: "empty",
	});
	const { controls: recipeDropdownControls } = useDropdown({
		label: "",
		value: "empty",
	});

	return (
		<Form>
			<Heading>New Meal</Heading>
			<Dropdown
				label="Day of week"
				options={daysOfWeek}
				controls={dayOfWeekDropdownControls}
			/>
			<Dropdown
				label="Time of day"
				options={timesOfDay}
				controls={timeOfDayDropdownControls}
			/>
			<Dropdown
				label="Select a recipe"
				options={recipes}
				controls={recipeDropdownControls}
			/>
			<TextArea
				labelText="Notes"
				labelProps={{ htmlFor: "notes" }}
				textAreaProps={{ id: "notes" }}
			/>
		</Form>
	);
}
