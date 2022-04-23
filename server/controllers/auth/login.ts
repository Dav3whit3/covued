import mongoose from "mongoose";
import { User } from "../../models/User.model.js";
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import createError from "http-errors";
import jwt from "jsonwebtoken";


const Login = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
	const { email, password } = req.body;
	const user = { email, password };
	const credentialsError = () => next(createError(401, "Incorrect credentials"));

	try {
		const userOk = await isUserRegistered(user.email);
		if (!userOk) return credentialsError();

		const passOk = isValidPassword(user.password, userOk.passwordHash);
		if (!passOk) return credentialsError();

		res.json({
			access_token: jwt.sign(
				{id: userOk.id,},
				process.env.JWT_SECRET || "changeme",
				{expiresIn: "1h",}
			),
		});
	}
	catch (error) {
		next(error);
	}
};

const isUserRegistered = async (email: string) => {
	try {
		const userSearch = await User.findOne({ email });
		return userSearch;
	} catch (error) {
		if (error instanceof mongoose.Error.ValidationError) return false;
	}
};

const isValidPassword = (password: string, passwordHash: string): boolean => {
	return bcrypt.compareSync(password, passwordHash);
};

export { Login };
