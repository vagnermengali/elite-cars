import AppDataSource from "../../data-source";
import Ad from "../../entities/ad.entity";
import Comment from "../../entities/comment.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IComment, ICommentRequest } from "../../interfaces/comment.interface";

const createCommentService = async ({description, adId}: ICommentRequest, userId: string): Promise<IComment> => {

	const commentRepository = AppDataSource.getRepository(Comment);
	const adRepository = AppDataSource.getRepository(Ad);
	const userRepository = AppDataSource.getRepository(User);

	const findUser = await userRepository.findOne({
		where: { id: userId }
	});

	if (!findUser) {
		throw new AppError("User not found", 404);
	}

	const findAd = await adRepository.findOne({
		where: { id: adId }
	});

	if (!findAd) {
		throw new AppError("Ad not found", 404);
	}

	const newComment: IComment = commentRepository.create({
		description, owner: findUser, ad: findAd
	});

	
	await commentRepository.save(newComment);

	return newComment;
};

export default createCommentService;
