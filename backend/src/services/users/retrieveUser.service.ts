import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUser } from "../../interfaces/users.interface";

const retrieveUserService = async (
	userId: string,
): Promise<IUser> => {
	const userRepository = AppDataSource.getRepository(User);

	const findUser = await userRepository.findOne({
		where: {
			id: userId,
		},
		relations: {
			address: true,
			ads: { gallery: true },
			comments: true,
		},
	});

	if (!findUser) {
		throw new AppError("User not found", 404);
	}

	return findUser;
};

export default retrieveUserService;
