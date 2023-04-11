import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IAdRequest } from "../../interfaces/ads.interface";
import createAdService from "../../services/ads/createAd.service";

const createAdController = async (req: Request, res: Response) => {
	const {
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
	}: IAdRequest = req.body;
	const userId = req.user.id;
	const createdAd = await createAdService(
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
		},
		userId
	);

	return res.status(201).json(instanceToPlain(createdAd));
};

export default createAdController;
