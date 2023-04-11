import { Request, Response } from "express";
import deleteGalleryService from "../../services/galleries/deleteGallery.service";

const deleteGalleryController = async (req: Request, res: Response) => {
	const galleryId = req.params.id;
	await deleteGalleryService(galleryId);

	return res.status(204).send();
};

export default deleteGalleryController;
