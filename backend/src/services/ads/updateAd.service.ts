import AppDataSource from "../../data-source";
import Ad from "../../entities/ad.entity";
import { AppError } from "../../errors/AppError";
import { IAd, IAdUpdate } from "../../interfaces/ads.interface";

const updateAdService = async (
	{
		typeAd,
		title,
		description,
		year,
		mileage,
		price,
		isActive,
		typeVehicle,
		urlCoverImage,
	}: IAdUpdate,
	adId: string
): Promise<IAd> => {
	const adRepository = AppDataSource.getRepository(Ad);
	const foundAd = await adRepository.findOneBy({
		id: adId,
	});

	if (!foundAd) {
		throw new AppError("Ad not found", 404);
	}

	await adRepository.update(adId, {
		typeAd,
		title,
		description,
		year,
		mileage,
		price,
		isActive,
		typeVehicle,
		urlCoverImage,
	});

	const updatedAd = await adRepository.findOne({
		where: { id: adId },
		relations: {
			gallery: true,
			user: true,
			comments: true,
		},
	});

	return updatedAd!;
};

export default updateAdService;
