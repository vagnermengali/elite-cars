import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { ICommentRequest } from "../../interfaces/comment.interface";
import createCommentService from "../../services/comment/createComment.service";

const createCommentController = async (req: Request, res: Response) => {
  const userId = req.user.id
  const { adId, description }:ICommentRequest = req.body
  const createdComment = await createCommentService({description, adId}, userId);

  return res.status(201).json(instanceToPlain(createdComment));
}

export default createCommentController;
