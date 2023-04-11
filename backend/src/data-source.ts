import { DataSource } from "typeorm";
import "dotenv/config";
import User from "./entities/user.entity";
import Address from "./entities/address.entity";
import Ad from "./entities/ad.entity";
import Gallery from "./entities/gallery.entity";
import Comment from "./entities/comment.entity";
import { createTables1677864604151 } from "./migrations/1677864604151-createTables";

const AppDataSource = new DataSource({
	type: "postgres",
	host: process.env.DB_HOST,
	port: 5432,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	synchronize: true,
	logging: true,
	entities: [User, Address, Ad, Comment, Gallery],
	migrations: [createTables1677864604151],
});

export default AppDataSource;
