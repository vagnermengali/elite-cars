import { Router } from "express";
import createAdController from "../controllers/ads/createAd.controller";
import deleteAdController from "../controllers/ads/deleteAd.controller";
import listAllAdsController from "../controllers/ads/listAllAds.controller";
import list20RandomAdsController from "../controllers/ads/list20RandomAds.controller";
import retrieveAdController from "../controllers/ads/retrieveAd.controller";
import updateAdController from "../controllers/ads/updateAd.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const adsRoutes = Router();

adsRoutes.post("", ensureAuthMiddleware, createAdController);
adsRoutes.get("", listAllAdsController);
adsRoutes.get("/random", list20RandomAdsController);
adsRoutes.get("/:id", retrieveAdController);
adsRoutes.patch("/:id", ensureAuthMiddleware, updateAdController);
adsRoutes.delete("/:id", ensureAuthMiddleware, deleteAdController);

export default adsRoutes;
