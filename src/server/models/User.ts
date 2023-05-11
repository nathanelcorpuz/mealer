import mongoose, { Types } from "mongoose";

const { Schema, model, models } = mongoose;

const userSchema = new Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	recipes: [{ type: Types.ObjectId, required: true }],
	isDeleted: { type: Boolean, default: false },
	dateCreated: { type: Date, default: Date.now },
});

const User = models.User || model("User", userSchema);

export default User;
