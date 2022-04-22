// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
import mongoose from "mongoose";

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}\
@${process.env.DB_CLUSTER}\
.0o2bu.mongodb.net/${process.env.DB_NAME}`;


const dbConnection = async (mongoUri: string): Promise<any> => {
	try {
		const conn = await mongoose.connect(mongoUri);
		console.log(`
	🍀  Connected to Mongo! Database name: "${conn.connections[0].name}" 🍀\n`);
	} catch (error) {
		console.error("Error connecting to mongo: ", error);
	}

	process.on("SIGINT", function () {
		mongoose.connection.close(function () {
			console.log("Force to close the MongoDB conection");
			process.exit(0);
		});
	});
};


export {dbConnection, MONGO_URI };
