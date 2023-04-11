import { Request, Response } from "express";
import { IGalleryUpdate } from "../../interfaces/galleries.interface";
import updateGalleryService from "../../services/galleries/updateGallery.service";

const updateGalleryController = async (req: Request, res: Response) => {
	const {
		urlImage1,
		urlImage2,
		urlImage3,
		urlImage4,
		urlImage5,
		urlImage6,
	}: IGalleryUpdate = req.body;
	const galleryId = req.params.id;
	const updatedGallery = await updateGalleryService(
		{ urlImage1, urlImage2, urlImage3, urlImage4, urlImage5, urlImage6 },
		galleryId
	);

	return res.json(updatedGallery);
};

export default updateGalleryController;
