import AppDataSource from "../../data-source";
import Comment from "../../entities/comment.entity";
import { AppError } from "../../errors/AppError";
import { IComment, ICommentUpdate } from "../../interfaces/comment.interface";

const updateCommentService = async (
	{
		description
	}: ICommentUpdate,
	id: string
): Promise<IComment> => {
	const commentRepository = AppDataSource.getRepository(Comment);
	const foundComment = await commentRepository.findOneBy({
		id: id,
	});

	if (!foundComment) {
		throw new AppError("Comment not found", 404);
	}

	await commentRepository.update(id, {
		description
	});

	const updatedComment = await commentRepository.findOne({
		where: { id: id }
	});

	return updatedComment!;
};

export default updateCommentService;
