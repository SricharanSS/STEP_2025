import mongoose from "mongoose";

const createDBConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
        console.log("Connected to MongoDB");
	} catch (err) {
        console.log("Error Whilte Connecting to DB: "+ err);
	}
};

export {createDBConnection};