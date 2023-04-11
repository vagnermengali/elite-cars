import { Request, Response } from "express";
import sendEmailRedefinePasswordService from "../../services/users/sendEmailRedefinePassword.service";

const sendEmailRedefinePasswordController = async (req: Request, res: Response) => {
  const email: string = req.body.email;
  const response = await sendEmailRedefinePasswordService(email);
  return res.json({
    message: response
  })
}

export default sendEmailRedefinePasswordController;
