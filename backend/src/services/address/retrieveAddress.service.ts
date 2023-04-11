import AppDataSource from "../../data-source";
import Address from "../../entities/address.entity";
import { AppError } from "../../errors/AppError";
import { IAddress } from "../../interfaces/address.interface";

const retrieveAddressService = async (
	id: string
): Promise<IAddress> => {
	const addressRepository = AppDataSource.getRepository(Address);

	const findAddress = await addressRepository.findOneBy({
			id: id,
	});

	if (!findAddress) {
		throw new AppError("Address not found", 404);
	}

	return findAddress;
};

export default retrieveAddressService;
