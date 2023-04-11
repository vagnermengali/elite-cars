import { Request, Response } from "express";
import softDeleteUserService from "../../services/users/softDeleteUser.service";

const softDeleteUserController = async (req: Request, res: Response) => {
  const isAdm: boolean = req.user.isAdm;
  const targetUser: string = req.params.id;
  const loogedUser: string = req.user.id;

  await softDeleteUserService(isAdm, targetUser, loogedUser);

  return res.status(204).send();
}

export default softDeleteUserController;
