import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import list20RandomAdsService from "../../services/ads/list20RandomAds.service";

const list20RandomAdsController = async (req: Request, res: Response) => {
	const randomAds = await list20RandomAdsService();

	return res.json(instanceToPlain(randomAds));
};

export default list20RandomAdsController;
