import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IAddressRequest } from "../../interfaces/address.interface";
import createAddressService from "../../services/address/createAddress.service";

const createAddressController = async (req: Request, res: Response) => {
  const address: IAddressRequest = req.body;
  const createdAddress = await createAddressService(address);

  return res.status(201).json(instanceToPlain(createdAddress));
}

export default createAddressController;