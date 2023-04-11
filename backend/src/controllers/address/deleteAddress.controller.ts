import { Request, Response } from "express";
import deleteAddressService from "../../services/address/deleteAddress.service";

const deleteAddressController = async (req: Request, res: Response) => {
	const id = req.params.id;

	await deleteAddressService(id);

	return res.status(204).send();
};

export default deleteAddressController;
