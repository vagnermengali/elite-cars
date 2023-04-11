import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUser } from "../../interfaces/users.interface";

const listusersService = async (isAdm: boolean): Promise<IUser[]> => {
	const userRepository = AppDataSource.getRepository(User);
	const users = await userRepository.find({
		relations: { address: true },
	});

	if (!isAdm) {
		return users.filter((user) => !(user.isAdm || !user.isActive));
	}

	return users;
};

export default listusersService;
