import { app } from "./config/app";
import { dbConnection, MONGO_URI } from "./config/db.config";
import { env } from "process";

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000


app.listen(env.BACKEND_PORT, () => {
  console.log(`
  🔥 Starting Express.js Server ! 🔥

  🎙  Server listening on http://localhost:${env.BACKEND_PORT} 🎙`);
});

dbConnection(MONGO_URI)