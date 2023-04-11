import { Request, Response } from "express";
import listAllGalleriesService from "../../services/galleries/listAllGalerys.service";

const listAllGalleriesController = async (req: Request, res: Response) => {
	const allGalleries = await listAllGalleriesService();

	return res.json(allGalleries);
};

export default listAllGalleriesController;
