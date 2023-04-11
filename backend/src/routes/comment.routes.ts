import { Router } from "express";
import updateAdController from "../controllers/ads/updateAd.controller";
import createCommentController from "../controllers/comment/createComment.controller";
import deleteCommentController from "../controllers/comment/deleteComment.controller";
import listAllCommentController from "../controllers/comment/listComment.controller";
import retrieveCommentController from "../controllers/comment/retrieveComment.controller";
import updateCommentController from "../controllers/comment/updateComment.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const commentRoutes = Router();

commentRoutes.post("",ensureAuthMiddleware, createCommentController);
commentRoutes.get("",  ensureAuthMiddleware, listAllCommentController);
commentRoutes.get("/:id", ensureAuthMiddleware, retrieveCommentController);
commentRoutes.patch("/:id", ensureAuthMiddleware, updateCommentController);
commentRoutes.delete("/:id", ensureAuthMiddleware, deleteCommentController);

export default commentRoutes;
