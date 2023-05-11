import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const directionSchema = new Schema({
	description: { type: String, required: true },
});

const ingredientSchema = new Schema({
	ingredient: { type: String, required: true },
	quantity: { type: String, required: true },
});

const recipeSchema = new Schema({
	userId: { type: String, required: true },
	name: { type: String, required: true },
	description: { type: String, required: true },
	ingredients: [ingredientSchema],
	directions: [directionSchema],
	isDeleted: { type: Boolean, default: false },
	dateCreated: { type: Date, default: Date.now },
});

const Recipe = models.Recipe || model("Recipe", recipeSchema);

export default Recipe;
