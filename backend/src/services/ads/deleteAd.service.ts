import AppDataSource from "../../data-source";
import Ad from "../../entities/ad.entity";
import Gallery from "../../entities/gallery.entity";
import { AppError } from "../../errors/AppError";

const deleteAdService = async (adId: string): Promise<void> => {
	const adRepository = AppDataSource.getRepository(Ad);
	const foundAd = await adRepository.findOneBy({
		id: adId,
	});

	if (!foundAd) {
		throw new AppError("Ad not found", 404);
	}

	await adRepository.delete({ id: adId });
};

export default deleteAdService;
