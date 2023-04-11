import { Router } from "express";
import createGalleryController from "../controllers/galleries/createGallery.controller";
import listAllGalleriesController from "../controllers/galleries/listAllGalleries.controller";
import retrieveGalleryController from "../controllers/galleries/retrieveGallery.controller";
import updateGalleryController from "../controllers/galleries/updateGallery.controller";
import deleteGalleryController from "../controllers/galleries/deleteGallery.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const galleriesRoutes = Router();

galleriesRoutes.post("", ensureAuthMiddleware, createGalleryController);
galleriesRoutes.get("", listAllGalleriesController);
galleriesRoutes.get("/:id", ensureAuthMiddleware, retrieveGalleryController);
galleriesRoutes.patch("/:id", ensureAuthMiddleware, updateGalleryController);
galleriesRoutes.delete("/:id", ensureAuthMiddleware, deleteGalleryController);

export default galleriesRoutes;
