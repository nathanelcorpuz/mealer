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

export default function useMealFormDropdowns({
	userRecipes,
	defaultValues,
}: {
	userRecipes: Recipe[];
	defaultValues?: {
		dayOfWeek: string | undefined;
		timeOfDay: string | undefined;
		recipeId: string | undefined;
	};
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

	const emptyInitialSelection = {
		label: "",
		value: "",
	};

	const initialDayOfWeekSelection = daysOfWeek.find(
		(day) => day.value === defaultValues?.dayOfWeek
	) || { ...emptyInitialSelection };

	const initialTimeOfDaySelection = timesOfDay.find(
		(timeOfDay) => timeOfDay.value === defaultValues?.timeOfDay
	) || { ...emptyInitialSelection };

	const initialRecipeSelection = recipes.find(
		(recipe) => recipe.value === defaultValues?.recipeId
	) || { ...emptyInitialSelection };

	const { controls: dayOfWeekDropdownControls } = useDropdown(
		initialDayOfWeekSelection
	);
	const { controls: timeOfDayDropdownControls } = useDropdown(
		initialTimeOfDaySelection
	);
	const { controls: recipeDropdownControls } = useDropdown(
		initialRecipeSelection
	);

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
