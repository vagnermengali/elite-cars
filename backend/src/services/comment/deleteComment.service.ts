import AppDataSource from "../../data-source";
import Comment from "../../entities/comment.entity";
import { AppError } from "../../errors/AppError";

const deleteCommentService = async (id: string): Promise<void> => {
	const commentRepository = AppDataSource.getRepository(Comment);
	const foundComment = await commentRepository.findOneBy({
		id: id
	});

	if (!foundComment) {
		throw new AppError("Comment not found", 404);
	}

	await commentRepository.delete({ id: id });
};

export default deleteCommentService;
