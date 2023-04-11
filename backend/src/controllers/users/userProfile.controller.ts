import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import userProfileService from "../../services/users/userProfile.service";

const userProfileController = async (req: Request, res: Response) => {
  const loggedUser: string = req.user.id;
  const user = await userProfileService(loggedUser);

  return res.json(instanceToPlain(user));
}

export default userProfileController;
