import AppDataSource from "../../data-source";
import Ad from "../../entities/ad.entity";
import Gallery from "../../entities/gallery.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IAd, IAdRequest } from "../../interfaces/ads.interface";
import { IGallery } from "../../interfaces/galleries.interface";

const createAdService = async (
	{
		typeAd,
		description,
		title,
		mileage,
		price,
		typeVehicle,
		year,
		isActive,
		urlCoverImage,
		urlImage1,
		urlImage2,
		urlImage3,
		urlImage4,
		urlImage5,
		urlImage6,
	}: IAdRequest,
	userId: string
): Promise<IAd> => {
	const adRepository = AppDataSource.getRepository(Ad);
	const userRepository = AppDataSource.getRepository(User);
	const galleryRepository = AppDataSource.getRepository(Gallery);
	const foundUser = await userRepository.findOneBy({ id: userId });

	if (!foundUser) {
		throw new AppError("User not found", 404);
	}

	const newAd: IAd = adRepository.create({
		typeAd,
		title,
		description,
		year,
		mileage,
		price,
		isActive,
		typeVehicle,
		urlCoverImage,
		user: foundUser,
	});

	const newGallery: IGallery = galleryRepository.create({
		urlImage1,
		urlImage2,
		urlImage3,
		urlImage4,
		urlImage5,
		urlImage6,
		ad: newAd,
	});

	await galleryRepository.save(newGallery);

	newAd.gallery = newGallery;

	await adRepository.save(newAd);

	const cretedAd = await adRepository.findOne({
		where: {
			id: newAd.id,
		},
		relations: {
			gallery: true,
			user: true,
			comments: true,
		},
	});

	return cretedAd!;
};

export default createAdService;
