import { Router } from "express";
import createAddressController from "../controllers/address/createAddress.controller";
import deleteAddressController from "../controllers/address/deleteAddress.controller";
import listAllAddressController from "../controllers/address/listAddress.controller";
import updateAddressController from "../controllers/address/updateAddress.controller";
import retrieveAddressController from "../controllers/address/retrieveAddress.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const addressRoutes = Router();

addressRoutes.post("", createAddressController);
addressRoutes.get("",  ensureAuthMiddleware, listAllAddressController);
addressRoutes.get("/:id", ensureAuthMiddleware, retrieveAddressController);
addressRoutes.patch("/:id", ensureAuthMiddleware, updateAddressController);
addressRoutes.delete("/:id", ensureAuthMiddleware, deleteAddressController);

export default addressRoutes;
