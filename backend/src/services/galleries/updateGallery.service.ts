import AppDataSource from "../../data-source";
import Gallery from "../../entities/gallery.entity";
import { AppError } from "../../errors/AppError";
import { IGallery, IGalleryUpdate } from "../../interfaces/galleries.interface";

const updateGalleryService = async (
	{
		urlImage1,
		urlImage2,
		urlImage3,
		urlImage4,
		urlImage5,
		urlImage6,
	}: IGalleryUpdate,
	galleryId: string
): Promise<IGallery> => {
	const galleryRepository = AppDataSource.getRepository(Gallery);
	const foundGallery = await galleryRepository.findOneBy({ id: galleryId });

	if (!foundGallery) {
		throw new AppError("Gallery not found", 404);
	}

	await galleryRepository.update(galleryId, {
		urlImage1,
		urlImage2,
		urlImage3,
		urlImage4,
		urlImage5,
		urlImage6,
	});

	const updatedGallery = await galleryRepository.findOne({
		where: { id: galleryId },
		relations: { ad: true },
	});

	return updatedGallery!;
};

export default updateGalleryService;
