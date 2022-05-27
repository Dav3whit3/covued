import express, { Request, Response, NextFunction } from "express";
import * as signUpController from '../controllers/auth/signup'
import * as loginController from '../controllers/auth/login'
import * as authMiddleware from '../middleware/auth.middleware'


const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction): Response => {
	return res.status(200).json({ ok: true });
});

/* Auth */

router.post("/login", loginController.Login);

/* Users */

router.post("/users", signUpController.Register);
//router.get("/users/me", authMiddleware.isAuthenticated, usersController.getCurrentUser);
//router.get("/users/:id", usersController.getUserById);


export { router }
