import { hash } from "bcryptjs";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUser, IUserUpdate } from "../../interfaces/users.interface";

const updateUserService = async (
	isAdm: boolean,
	targetUser: string,
	loggedUser: string,
	data: IUserUpdate
): Promise<IUser> => {
	const { name, email, cpf, phone, birthday, description, password } = data;

	const userRepository = AppDataSource.getRepository(User);
	const findUser = await userRepository.findOneBy({
		id: targetUser,
	});

	if (!findUser) {
		throw new AppError("User not found", 404);
	}

	if (targetUser !== loggedUser && !isAdm) {
		throw new AppError("User is not admin", 401);
	}

	await userRepository.update(
		{
			id: targetUser,
		},
		{
			name: name ? name : findUser.name,
			email: email ? email : findUser.email,
			cpf: cpf ? cpf : findUser.cpf,
			phone: phone ? phone : findUser.phone,
			birthday: birthday ? birthday : findUser.birthday,
			description: description ? description : findUser.description,
			password: password ? await hash(password, 10) : findUser.password,
		}
	);

	const updatedUser = await userRepository.findOne({
		where: {
			id: targetUser,
		},
		relations: {
			address: true,
			ads: { gallery: true },
			comments: true,
		},
	});

	return updatedUser!;
};

export default updateUserService;
