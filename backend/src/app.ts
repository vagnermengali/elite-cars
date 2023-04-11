import "reflect-metadata";
import express from "express";
import cors from "cors";
import "express-async-errors";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import userRoutes from "./routes/users.routes";
import sessionRoutes from "./routes/sessions.routes";
import adsRoutes from "./routes/ads.routes";
import galleriesRoutes from "./routes/galleries.routes";
import addressRoutes from "./routes/address.routes";
import commentRoutes from "./routes/comment.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/ads", adsRoutes);
app.use("/galleries", galleriesRoutes);
app.use("/address", addressRoutes);
app.use("/comment", commentRoutes);

app.use(handleErrorMiddleware);

export default app;
