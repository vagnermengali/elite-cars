import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUserLogin } from "../../interfaces/sessions.interface";
import "dotenv/config";

const createSessionService = async (data: IUserLogin): Promise<string> => {
  const { email, password } = data;

  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({
    email
  });

  const passwordMatch = await compare(password, findUser!.password);

  if(!passwordMatch) {
    throw new AppError("Invalid e-mail or password", 403);
  }

  const token = jwt.sign({
    isAdm: findUser!.isAdm,
  },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: findUser!.id,
    }
  );

  return token;
}

export default createSessionService;
