import { Request, Response } from "express";
import deleteUserService from "../../services/users/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  const isAdm: boolean = req.user.isAdm;
  const targetUser: string = req.params.id;
  const loogedUser: string = req.user.id;

  await deleteUserService(isAdm, targetUser, loogedUser);

  return res.status(204).send();
}

export default deleteUserController;
