import { Request, Response } from "express";
import { IAddress } from "../../interfaces/address.interface";
import updateAddressService from "../../services/address/updateAddress.service";

const updateAddressController = async (req: Request, res: Response) => {
	const {
		cep,
		state,
		city,
		street,
		number,
		complement,
	}: IAddress = req.body;
	const id = req.params.id;
	const updatedAddress = await updateAddressService(
		{
			cep,
			state,
			city,
			street,
			number,
			complement,
		},
		id
	);

	return res.json(updatedAddress);
};

export default updateAddressController;
