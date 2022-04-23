// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
import "dotenv/config";

import createError from "http-errors";

import mongoose from "mongoose";

import jwt from "jsonwebtoken";

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
import express, { Request, Response, NextFunction } from "express";
const app = express();

// ℹ️  Add config app. It runs most middlewares
import { config } from "./app.config";
config(app);

// default value for title local
const projectName = "covidreporter";
const capitalized = (string: string) => string[0].toUpperCase() + string.slice(1).toLowerCase();
app.locals.title = `${capitalized(projectName)}`;

//routes
import { router } from "./routes";
app.use("/api", router);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
app.use((req, res, next) => {
	next(createError(404, "Route not found"));
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
	console.log(error);
	if (error instanceof mongoose.Error.ValidationError) {
		error = createError(400, error);
	} else if (error instanceof mongoose.Error.CastError) {
		error = createError(404, "Resource not found");
	} else if (error.message.includes("E11000")) {
		error = createError(400, "Already exists");
	} else if (error instanceof jwt.JsonWebTokenError) {
		error = createError(401, error);
	} else if (!error.status) {
		error = createError(500, error);
	}

	if (error.status >= 500) {
		console.error(error);
	}

	const data: { message: string; errors: {} | undefined } = {
		message: "",
		errors: {},
	};

	data.message = error.message;
	data.errors = error.errors
		? Object.keys(error.errors).reduce(
				(errors, key) => ({
					...errors,
					[key]: error.errors[key].message || error.errors[key],
				}),
				{}
		  )
		: undefined;

	res.status(error.status).json(data);
});

export { app };
