import mongoose, { Types } from "mongoose";

const { Schema, model, models } = mongoose;

interface Ingredient {
	ingredient: string;
	quantity: string;
}

export interface RecipeModel {
	userId: Types.ObjectId;
	slug: string;
	name: string;
	description: string;
	ingredients: [Ingredient];
	directions?: [string];
	isDeleted: boolean;
	dateCreated: Date;
}

const ingredientSchema = new Schema<Ingredient>({
	ingredient: { type: String, required: true },
	quantity: { type: String, required: true },
});

const recipeSchema = new Schema<RecipeModel>({
	userId: { type: Schema.Types.ObjectId, required: true },
	slug: { type: String, required: true },
	name: { type: String, required: true },
	description: { type: String, required: true },
	ingredients: [ingredientSchema],
	directions: [{ type: String, default: "" }],
	isDeleted: { type: Boolean, default: false },
	dateCreated: { type: Date, default: Date.now },
});

export interface RecipeDocument extends mongoose.Document, RecipeModel {}

const Recipe =
	models.Recipe<RecipeDocument> ||
	model<RecipeDocument>("Recipe", recipeSchema);

export default Recipe;
