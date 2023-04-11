import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import retrieveCommentService from "../../services/comment/retrieveComment.service";

const retrieveCommentController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const comment = await retrieveCommentService(id);

  return res.json(instanceToPlain(comment));
}

export default retrieveCommentController;
