import { hash } from "bcryptjs";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUpdatePassword } from "../../interfaces/users.interface";

const redefinePasswordService = async ( data: IUpdatePassword): Promise<string> => {
  const { password, newPasswordCode, user } = data;
	const userRepository = AppDataSource.getRepository(User);
	const findUser = await userRepository.findOneBy({
		id: user,
	});

	if (!findUser) {
		throw new AppError("User not found", 404);
	}

  if (findUser.newPasswordCode !== newPasswordCode) {
    throw new AppError("Invalid code!");
  }

	await userRepository.update(
		{
			id: user,
		},
		{
			password: password ? await hash(password, 10) : findUser.password,
			newPasswordCode: "",
		}
	);

	return "Updated password";
}

export default redefinePasswordService;
