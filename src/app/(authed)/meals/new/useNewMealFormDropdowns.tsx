import useDropdown from "@/hooks/useDropdown";
import capitalize from "@/lib/capitalize";
import {
	daysOfWeek as daysOfWeekConst,
	timesOfDay as timesOfDayConst,
} from "@/lib/constants";
import { DayOfWeek, Recipe, TimeOfDay } from "@/lib/types";

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

export default function useNewMealFormDropdowns({
	userRecipes,
}: {
	userRecipes: Recipe[];
}) {
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

	const recipes: RecipeDropdownSelection[] = userRecipes.map(
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

	const controls = {
		dayOfWeekDropdownControls,
		timeOfDayDropdownControls,
		recipeDropdownControls,
	};

	return {
		daysOfWeek,
		timesOfDay,
		recipes,
		controls,
	};
}
