import mongoose, { Types } from "mongoose";

const { Schema, model, models } = mongoose;

export interface UserModel {
	username: string;
	password: string;
	recipes: Types.ObjectId;
	isDeleted: boolean;
	dateCreated: Date;
}

const userSchema = new Schema<UserModel>({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	recipes: [{ type: Types.ObjectId, required: true }],
	isDeleted: { type: Boolean, default: false },
	dateCreated: { type: Date, default: Date.now },
});

export interface UserDocument extends mongoose.Document, UserModel {}

const User =
	models.User<UserDocument> || model<UserDocument>("User", userSchema);

export default User;
