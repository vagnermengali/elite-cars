import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const deleteUserService = async (isAdm: boolean, targetUser: string, loogedUser: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({
    id: targetUser,
  });

  if (!findUser || !findUser.isActive) {
    throw new AppError("User not found", 404);
  }

  if (targetUser !== loogedUser && !isAdm) {
    throw new AppError("User is not admin", 401);
  }

  await userRepository.delete(
    {
      id: targetUser,
    }
  );
}

export default deleteUserService;
