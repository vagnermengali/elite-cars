import AppDataSource from "../../data-source";
import Ad from "../../entities/ad.entity";
import { IAd } from "../../interfaces/ads.interface";

const list20RandomAdsService = async (): Promise<IAd[]> => {
	const adRepository = AppDataSource.getRepository(Ad);
	const randomAds = adRepository
		.createQueryBuilder("ads")
		.orderBy("RANDOM()")
		.leftJoinAndSelect("ads.user", "users")
		.leftJoinAndSelect("ads.gallery", "galleries")
		.leftJoinAndSelect("ads.comments", "comments")
		.limit(20)
		.getMany();

	return randomAds;
};

export default list20RandomAdsService;
