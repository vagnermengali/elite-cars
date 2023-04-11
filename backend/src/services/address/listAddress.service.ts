import AppDataSource from "../../data-source";
import Address from "../../entities/address.entity";
import { IAddress } from "../../interfaces/address.interface";

const listAllAddressService = async (): Promise<IAddress[]> => {
	const addressRepository = AppDataSource.getRepository(Address);
	const addresses = await addressRepository.find();
	return addresses;
};

export default listAllAddressService;