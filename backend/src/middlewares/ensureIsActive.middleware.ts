import { AppError } from "../errors/AppError";
import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import User from "../entities/user.entity";

const ensureIsActiveMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const email: string = req.body.email;
	const userRepository = AppDataSource.getRepository(User);
	const user = await userRepository.findOneBy({
		email,
	});

	if (!user) {
		throw new AppError("Invalid e-mail or password", 403);
	}

	if (user && user.isActive === false) {
		throw new AppError("User is not active", 403);
	}
	return next();
};

export default ensureIsActiveMiddleware;
