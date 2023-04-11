import AppDataSource from "../../data-source";
import Comment from "../../entities/comment.entity";
import { IComment } from "../../interfaces/comment.interface";

const listAllCommentService = async (): Promise<IComment[]> => {
	const commentRepository = AppDataSource.getRepository(Comment);
	const comments = await commentRepository.find();
	return comments;
};

export default listAllCommentService;