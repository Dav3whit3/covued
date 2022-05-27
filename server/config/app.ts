// ℹ️ Gets access to environment variables/settings
import "dotenv/config";

// Main APP
import express from "express";
const app = express();

// ℹ️  Add config app. It runs most middlewares
import { appConfig } from "./app.config";
appConfig(app);

// default value for title local
const projectName = "covidreporter";
const capitalized = (string: string): string => string[0].toUpperCase() + string.slice(1).toLowerCase();
app.locals.title = `${capitalized(projectName)}`;

// 📡  Main Routes
import { router } from "./routes";
app.use("/api", router);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
import { errorsConfig } from "./errors.config";
errorsConfig(app)


export { app };
