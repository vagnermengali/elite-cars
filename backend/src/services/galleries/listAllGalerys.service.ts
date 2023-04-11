import AppDataSource from "../../data-source";
import Gallery from "../../entities/gallery.entity";
import { IGallery } from "../../interfaces/galleries.interface";

const listAllGalleriesService = async (): Promise<IGallery[]> => {
	const galleryRepository = AppDataSource.getRepository(Gallery);
	const allGalleries = await galleryRepository.find({
		relations: { ad: true },
	});

	return allGalleries;
};

export default listAllGalleriesService;
