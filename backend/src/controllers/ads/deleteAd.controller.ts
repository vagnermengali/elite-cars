import { Request, Response } from "express";
import deleteAdService from "../../services/ads/deleteAd.service";

const deleteAdController = async (req: Request, res: Response) => {
	const adId = req.params.id;

	await deleteAdService(adId);

	return res.status(204).send();
};

export default deleteAdController;
