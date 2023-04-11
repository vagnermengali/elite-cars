import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import retrieveAddressService from "../../services/address/retrieveAddress.service";

const retrieveAddressController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const address = await retrieveAddressService(id);

  return res.json(instanceToPlain(address));
}

export default retrieveAddressController;
