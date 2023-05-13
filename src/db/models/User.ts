import mongoose, { Types } from "mongoose";

const { Schema, model, models } = mongoose;

export interface UserModel {
	username: string;
	password: string;
	recipeIds: Types.ObjectId;
	mealIds: Types.ObjectId;
	isDeleted: boolean;
	dateCreated: Date;
}

const userSchema = new Schema<UserModel>({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	recipeIds: [{ type: Types.ObjectId, required: true, ref: "Recipe" }],
	mealIds: [{ type: Types.ObjectId, required: true, ref: "Meal" }],
	isDeleted: { type: Boolean, default: false },
	dateCreated: { type: Date, default: Date.now },
});

export interface UserDocument extends mongoose.Document, UserModel {}

const User =
	models.User<UserDocument> || model<UserDocument>("User", userSchema);

export default User;
