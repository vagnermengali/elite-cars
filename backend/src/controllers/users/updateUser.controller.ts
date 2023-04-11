import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IUserUpdate } from "../../interfaces/users.interface";
import updateUserService from "../../services/users/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  const isAdm: boolean = req.user.isAdm;
  const targetUser: string = req.params.id;
  const loggedUser: string = req.user.id;
  const data: IUserUpdate = req.body;
  const updatedUser = await updateUserService(isAdm, targetUser, loggedUser, data);

  return res.json(instanceToPlain(updatedUser));
}

export default updateUserController;
