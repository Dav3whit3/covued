import { User } from "../../models/User.model.js";
import bcrypt from "bcryptjs";
import { Request, Response, NextFunction } from "express";
import createError from "http-errors";


const Register = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
	const { email, password, repeatedPassword } = req.body;
	const user = { email, password, repeatedPassword };

	try {
		const passOk = arePasswordEqual(user.password, user.repeatedPassword);
		if (!passOk) return next(createError(404, "Passwords don't match"));

		const userOk = await isUserUnique(user.email);
		if (!userOk) return next(createError(404, "Email already in use!"));

		const newUser = await createUser(user);
		return res.status(201).json(newUser);
	}
	catch (error) {
		next(error);
	}
};

const isUserUnique = async (email: string) => {
	const userSearch = await User.findOne({ email });
	return userSearch ? false : true;
};

const arePasswordEqual = (passOne: string, passTwo: string): boolean => {
	return passOne === passTwo;
};

const createUser = async (user: any) => {
	const saltRounds = 10;
	const salt = await bcrypt.genSalt(saltRounds);
	const hashedPassword = await bcrypt.hash(user.password, salt);

	const createdUser = await User.create({
		email: user.email,
		passwordHash: hashedPassword,
	});
	console.info(`New user created: ${user.email}`);

	return createdUser;
};

export { Register };
