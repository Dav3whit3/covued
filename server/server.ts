import { app } from "./config/app";
import { dbConnection, MONGO_URI } from "./config/db.config";


// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`
  🔥 Starting Express.js Server ! 🔥

  🎙  Server listening on http://localhost:${PORT} 🎙`);
});

dbConnection(MONGO_URI)