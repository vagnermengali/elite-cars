import AppDataSource from "../../data-source";
import Address from "../../entities/address.entity";
import { AppError } from "../../errors/AppError";

const deleteAddressService = async (id: string): Promise<void> => {
	const addressRepository = AppDataSource.getRepository(Address);
	const foundAddress = await addressRepository.findOneBy({
		id: id
	});

	if (!foundAddress) {
		throw new AppError("Address not found", 404);
	}

	await addressRepository.delete({ id: id });
};

export default deleteAddressService;
