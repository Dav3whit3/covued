import { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import jwt, { JwtPayload, VerifyOptions } from "jsonwebtoken";

export const isNotAuthenticated = (req: Request, res: Response, next: NextFunction): void => {
	const authorization = req.header("Authorization");
	if (authorization) return next(createError(401));
	return next();
};

declare interface IGetUserAuthInfoRequest extends Request {
	currentUser: string;
}

export const isAuthenticated = (
	req: IGetUserAuthInfoRequest,
	res: Response,
	next: NextFunction
): void => {
	const authorization = req.header("Authorization");
	if (!authorization) return next(createError(401));

	const [type, token] = authorization.split(" ");
	if (type !== "Bearer") return next(createError(401));

	jwt.verify(token, process.env.JWT_SECRET || "changeme", (err, decodedToken: string | JwtPayload | undefined) => {
		if (err) return next(err);
		req.currentUser = decodedToken.id;
		next();
	});
};
