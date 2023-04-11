import AppDataSource from "../../data-source";
import Ad from "../../entities/ad.entity";
import Gallery from "../../entities/gallery.entity";
import { AppError } from "../../errors/AppError";
import {
	IGallery,
	IGalleryRequest,
} from "../../interfaces/galleries.interface";

const creategallerieservice = async ({
	adId,
	urlImage1,
	urlImage2,
	urlImage3,
	urlImage4,
	urlImage5,
	urlImage6,
}: IGalleryRequest): Promise<IGallery> => {
	const galleryRepository = AppDataSource.getRepository(Gallery);
	const adRepository = AppDataSource.getRepository(Ad);

	const foundAd = await adRepository.findOneBy({ id: adId });

	if (!foundAd) {
		throw new AppError("Ad not found", 404);
	}

	const newGallery = galleryRepository.create({
		urlImage1,
		urlImage2,
		urlImage3,
		urlImage4,
		urlImage5,
		urlImage6,
	});

	await galleryRepository.save(newGallery);

	foundAd.gallery = newGallery;

	await adRepository.save(foundAd);

	return newGallery;
};

export default creategallerieservice;
