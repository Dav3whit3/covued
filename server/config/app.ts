// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
import 'dotenv/config';

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
import express from 'express';
const app = express();

// ℹ️  Add config app. It runs most middlewares
import { config } from './app.config'
config(app)

// default value for title local
const projectName = 'covidreporter';
const capitalized = (string: string) => string[0].toUpperCase() + string.slice(1).toLowerCase();
app.locals.title = `${capitalized(projectName)}`;

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
import { errorHandling } from '../utils/errorsConfig.js'
errorHandling(app)



export { app }