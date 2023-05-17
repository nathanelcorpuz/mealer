import { DayOfWeek, UserData } from "@/lib/types";

export default (userData: UserData, dayOfWeek: DayOfWeek) => {
	const meals = userData.meals.filter((meal) => meal.dayOfWeek === dayOfWeek);
	return { dayOfWeek, meals };
};
