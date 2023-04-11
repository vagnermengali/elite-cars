import { Request, Response } from "express";
import { IGalleryRequest } from "../../interfaces/galleries.interface";
import createGallerieservice from "../../services/galleries/createGallery.service";

const createGalleryController = async (req: Request, res: Response) => {
	const {
		adId,
		urlImage1,
		urlImage2,
		urlImage3,
		urlImage4,
		urlImage5,
		urlImage6,
	}: IGalleryRequest = req.body;

	const newGallery = await createGallerieservice({
		adId,
		urlImage1,
		urlImage2,
		urlImage3,
		urlImage4,
		urlImage5,
		urlImage6,
	});

	return res.status(201).json(newGallery);
};

export default createGalleryController;
