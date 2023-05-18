// this relies on next config to avoid an error

import mongoose from "mongoose";

const NODE_ENV = process.env.NODE_ENV;

// const MONGODB_URI =
// 	NODE_ENV === "development"
// 		? "mongodb://127.0.0.1:27017/mealer"
// 		: (process.env.MONGODB_URI as string);
const MONGODB_URI = process.env.MONGODB_URI as string;

async function connectMongo() {
	if (mongoose.connection.readyState === 1) {
		console.log("DB already connected");
		return;
	}

	try {
		await mongoose.connect(MONGODB_URI);
		let conn = mongoose.connection;
		conn.once("open", () => {
			console.log("Connected to DB");
		});
	} catch (error) {
		console.error("Error connecting to MongoDB", error);
	}
}

export default connectMongo;
