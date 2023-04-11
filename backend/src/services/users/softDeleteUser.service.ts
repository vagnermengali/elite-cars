import AppDataSource from "../../data-source";
import Ad from "../../entities/ad.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const softDeleteUserService = async (
	isAdm: boolean,
	targetUser: string,
	loogedUser: string
): Promise<void> => {
	const userRepository = AppDataSource.getRepository(User);
	const adRepository = AppDataSource.getRepository(Ad);
	const findUser = await userRepository.findOneBy({
		id: targetUser,
	});

	if (!findUser || !findUser.isActive) {
		throw new AppError("User not found", 404);
	}

	if (targetUser !== loogedUser && !isAdm) {
		throw new AppError("User is not admin", 401);
	}

	await userRepository.update(
		{
			id: targetUser,
		},
		{
			isActive: false,
		}
	);

	await adRepository.update(
		{
			user: findUser,
		},
		{
			isActive: false,
		}
	);
};

export default softDeleteUserService;
