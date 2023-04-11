import { Request, Response } from "express";
import retrieveGalleryService from "../../services/galleries/retrieveGallery.service";

const retrieveGalleryController = async (req: Request, res: Response) => {
	const galleryId = req.params.id;
	const foundGallery = await retrieveGalleryService(galleryId);

	return res.json(foundGallery);
};

export default retrieveGalleryController;
