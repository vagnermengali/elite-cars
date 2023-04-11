import AppDataSource from "../../data-source";
import Gallery from "../../entities/gallery.entity";
import { AppError } from "../../errors/AppError";

const deleteGalleryService = async (galleryId: string): Promise<void> => {
	const galleryRepository = AppDataSource.getRepository(Gallery);
	const foundGallery = galleryRepository.findOneBy({ id: galleryId });

	if (!foundGallery) {
		throw new AppError("Galley not found", 404);
	}

	await galleryRepository.delete({ id: galleryId });
};

export default deleteGalleryService;
