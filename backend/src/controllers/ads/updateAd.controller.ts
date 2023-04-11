import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IAdUpdate } from "../../interfaces/ads.interface";
import updateAdService from "../../services/ads/updateAd.service";

const updateAdController = async (req: Request, res: Response) => {
	const {
		typeAd,
		title,
		description,
		year,
		mileage,
		price,
		isActive,
		typeVehicle,
		urlCoverImage,
	}: IAdUpdate = req.body;
	const adId = req.params.id;
	const updatedAd = await updateAdService(
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
		},
		adId
	);

	return res.json(instanceToPlain(updatedAd));
};

export default updateAdController;
