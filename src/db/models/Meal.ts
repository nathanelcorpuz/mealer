import { DayOfWeek, TimeOfDay } from "@/lib/types";
import mongoose, { Types } from "mongoose";

const { Schema, model, models } = mongoose;

export interface MealModel {
  userId: Types.ObjectId;
  recipeId: Types.ObjectId;
  timeOfDay: TimeOfDay;
  dayOfWeek: DayOfWeek;
  notes: string;
  isDeleted: boolean;
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

const timesOfDay = [
  "breakfast",
  "brunch",
  "lunch",
  "afternoon",
  "dinner",
  "midnight",
];

const mealSchema = new Schema<MealModel>({
  userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  recipeId: { type: Schema.Types.ObjectId, required: true, ref: "Recipe" },
  timeOfDay: { type: String, enum: timesOfDay, required: true },
  dayOfWeek: { type: String, enum: daysOfWeek, required: true },
  notes: { type: String, default: "" },
  isDeleted: { type: Boolean, default: false },
});

export interface MealDocument extends mongoose.Document, MealModel {}

const Meal =
  models.Meal<MealDocument> || model<MealDocument>("Meal", mealSchema);

export default Meal;
