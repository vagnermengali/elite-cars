import { Request, Response } from "express";
import listCommentService from "../../services/comment/listAllComment.service";

const listAllCommentController = async (req: Request, res: Response) => {
	const allComment = await listCommentService();

	return res.json(allComment);
};

export default listAllCommentController;
