import { Request, Response } from "express";
import { IComment } from "../../interfaces/comment.interface";
import updateCommentService from "../../services/comment/updateComment.service";

const updateCommentController = async (req: Request, res: Response) => {
	const {
		description
	}: IComment = req.body;
	const id = req.params.id;
	const updatedComment = await updateCommentService(
		{
			description
		},
		id
	);

	return res.json(updatedComment);
};

export default updateCommentController;
