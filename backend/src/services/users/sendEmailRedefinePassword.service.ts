import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import nodemailer from "nodemailer";
import "dotenv/config";

const sendEmailRedefinePasswordService = async (email: string): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({email});

	if (!findUser) {
		throw new AppError("User not found", 404);
	}

  let code = "";
  const numbers = "0123456789";
  
  while (code.length < 6) {
    const index = Math.floor(Math.random() * 10);
    if(!code.includes(numbers[index])) {
      code += numbers[index];
    }
  }

  await userRepository.update({
    email
  },
  {
    newPasswordCode: code
  });

  const user = await userRepository.findOneBy({
    email
  });

  const smpt = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });

  const configEmail = {
    from: "motorsshop.m6@gmail.com",
    to: email,
    subject: "Redefinição de senha",
    html: `<p>Acesse o link abaixo para redefinir sua senha:</p><br/><p>Use o código ${code} para validar sua alteração de senha</p><br/><a href="http://localhost:5173/redefine-password/${user?.id} ${user?.newPasswordCode}" target=_blank>Redefinir minha senha!</a>`,
  }

  smpt.sendMail(configEmail, (err) => {
    if (err) {
      console.log(err)
    }
  });

  return "Email successfully sent";
}

export default sendEmailRedefinePasswordService;
