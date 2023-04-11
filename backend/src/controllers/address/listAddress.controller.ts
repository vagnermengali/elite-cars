import { Request, Response } from "express";
import listAddressService from "../../services/address/listAddress.service";

const listAllAddressController = async (req: Request, res: Response) => {
	const allAddress = await listAddressService();

	return res.json(allAddress);
};

export default listAllAddressController;
