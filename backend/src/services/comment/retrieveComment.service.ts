import AppDataSource from "../../data-source";
import Comment from "../../entities/comment.entity";
import { AppError } from "../../errors/AppError";
import { IComment } from "../../interfaces/comment.interface";

const retrieveCommentService = async (
	id: string
): Promise<IComment> => {
	const commentRepository = AppDataSource.getRepository(Comment);

	const findComment = await commentRepository.findOneBy({
		id: id,
	});

	if (!findComment) {
		throw new AppError("Comment not found", 404);
	}

	return findComment;
};

export default retrieveCommentService;
