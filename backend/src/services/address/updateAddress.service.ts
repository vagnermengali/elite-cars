import AppDataSource from "../../data-source";
import Address from "../../entities/address.entity";
import { AppError } from "../../errors/AppError";
import { IAddress, IAddressUpdate } from "../../interfaces/address.interface";

const updateAddressService = async (
	{
		cep,
		state,
		city,
		street,
		number,
		complement,
	}: IAddressUpdate,
	id: string
): Promise<IAddress> => {
	const addressRepository = AppDataSource.getRepository(Address);
	const foundAddress = await addressRepository.findOneBy({
		id: id,
	});

	if (!foundAddress) {
		throw new AppError("Address not found", 404);
	}

	await addressRepository.update(id, {
		cep,
		state,
		city,
		street,
		number,
		complement,
	});

	const updatedAddress = await addressRepository.findOne({
		where: { id: id }
	});

	return updatedAddress!;
};

export default updateAddressService;
