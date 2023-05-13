import mongoose, { Types } from "mongoose";

const { Schema, model, models } = mongoose;

type DayOfWeek =
	| "sunday"
	| "monday"
	| "tuesday"
	| "wednesday"
	| "thursday"
	| "friday"
	| "saturday";

export interface MealModel {
	userId: Types.ObjectId;
	recipeId: Types.ObjectId;
	time: string;
	dayOfWeek: DayOfWeek;
	notes: string;
}

const daysOfWeek = [
	"sunday",
	"monday",
	"tuesday",
	"wednesday",
	"thursday",
	"friday",
	"saturday",
];

const mealSchema = new Schema<MealModel>({
	userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
	recipeId: { type: Schema.Types.ObjectId, required: true, ref: "Recipe" },
	time: { type: String, required: true },
	dayOfWeek: { type: String, enum: daysOfWeek, required: true },
	notes: { type: String, required: true },
});

export interface MealDocument extends mongoose.Document, MealModel {}

const Meal =
	models.Meal<MealDocument> || model<MealDocument>("Meal", mealSchema);

export default Meal;
