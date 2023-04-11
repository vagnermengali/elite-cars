import AppDataSource from "../../data-source";
import Address from "../../entities/address.entity";
import { IAddress, IAddressRequest } from "../../interfaces/address.interface";

const createAddressService = async (address: IAddressRequest): Promise<IAddress> => {
	const {
		cep,
		state,
		city,
		street,
		number,
		complement
	} = address;

	const addressRepository = AppDataSource.getRepository(Address);

	const newAddress: IAddress = addressRepository.create({
		cep,
		state,
		city,
		street,
		number,
		complement
	});

	await addressRepository.save(newAddress);

	return newAddress;
};

export default createAddressService;
