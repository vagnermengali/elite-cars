import AppDataSource from "../../data-source";
import Ad from "../../entities/ad.entity";
import { IAd } from "../../interfaces/ads.interface";

const listAllAdsService = async (): Promise<IAd[]> => {
	const adRepository = AppDataSource.getRepository(Ad);
	const allAds = adRepository.find({
		relations: { gallery: true, user: true, comments: true },
	});

	return allAds;
};

export default listAllAdsService;
