import AppDataSource from "../../data-source";
import Gallery from "../../entities/gallery.entity";
import { AppError } from "../../errors/AppError";
import { IGallery } from "../../interfaces/galleries.interface";

const retrieveGalleryService = async (galleryId: string): Promise<IGallery> => {
	const galleryRepository = AppDataSource.getRepository(Gallery);
	const foundGallery = await galleryRepository.findOne({
		where: { id: galleryId },
		relations: {
			ad: true,
		},
	});

	if (!foundGallery) {
		throw new AppError("Gallery not found", 404);
	}

	return foundGallery;
};

export default retrieveGalleryService;
