import AppDataSource from "../../data-source";
import Ad from "../../entities/ad.entity";
import { AppError } from "../../errors/AppError";
import { IAd } from "../../interfaces/ads.interface";

const retrieveAdService = async (adId: string): Promise<IAd> => {
  const adRepository = AppDataSource.getRepository(Ad);

  const foundAd = await adRepository.findOne({
    where: {
      id: adId,
    },
    relations: {
      user: true,
      gallery: true,
      comments: { owner: true },
    },
    select: {
      id: true,
      typeAd: true,
      title: true,
      description: true,
      year: true,
      mileage: true,
      price: true,
      isActive: true,
      typeVehicle: true,
      urlCoverImage: true,
      comments: {
        id: true,
        description: true,
        createdAt: true,
        updatedAt: true,
        owner: { id: true, name: true, avatarColor: true },
      },
    },
  });

  if (!foundAd) {
    throw new AppError("Ad not found", 404);
  }

  return foundAd;
};

export default retrieveAdService;
