import { Request, Response } from "express";
import { IUpdatePassword } from "../../interfaces/users.interface";
import redefinePasswordService from "../../services/users/redefinePassword.service";

const redefinePasswordController = async (req: Request, res: Response) => {
  const data: IUpdatePassword = req.body;
  const updatedPassword = await redefinePasswordService(data);
  return res.json({
    message: updatedPassword
  });
}

export default redefinePasswordController;
