import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUser } from "../../interfaces/users.interface";

const userProfileService = async (loggedUser: string): Promise<IUser> => {
	const userRepository = AppDataSource.getRepository(User);
	const user = await userRepository.findOne({
		where: {
			id: loggedUser,
		},
		relations: {
			address: true,
			ads: { gallery: true },
			comments: true,
		},
	});

	return user!;
};

export default userProfileService;
