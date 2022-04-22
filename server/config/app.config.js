// We reuse this import in order to have access to the `body` property in requests
import express from "express";

// ℹ️ Responsible for the messages you see in the terminal as requests are coming in
// https://www.npmjs.com/package/morgan
import logger from "morgan";
// ℹ️ Needed when we deal with cookies (we will when dealing with authentication)
// https://www.npmjs.com/package/cookie-parser

import cookieParser from "cookie-parser";

import { expressSession } from "./session.config.js";
import { passportSession } from "./passport.config.js";

import passport from "passport";

// Middleware configuration
export const config = (app) => {
	// In development environment the app logs
	app.use(logger("dev"));

	// To have access to `body` property in the request
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(cookieParser());

	// Session config
	app.use(expressSession);
	passportSession()

	app.use(passport.initialize());
	app.use(passport.session());
};
