import User from "../entities/user.entity";
import Comment from "../entities/comment.entity";
import Gallery from "../entities/gallery.entity";

export interface IAdRequest {
	typeAd: string;
	title: string;
	description: string;
	year: number;
	mileage: number;
	price: string;
	isActive: boolean;
	typeVehicle: string;
	urlCoverImage: string;
	urlImage1?: string;
	urlImage2?: string;
	urlImage3?: string;
	urlImage4?: string;
	urlImage5?: string;
	urlImage6?: string;
}

export interface IAd {
	id: string;
	typeAd: string;
	title: string;
	description: string;
	year: number;
	mileage: number;
	price: string;
	isActive: boolean;
	typeVehicle: string;
	urlCoverImage: string;
	createdAt: Date;
	updatedAt: Date;
	user: User;
	comments: Comment[];
	gallery: Gallery;
}

export interface IAdUpdate {
	typeAd?: string;
	title?: string;
	description?: string;
	year?: number;
	mileage?: number;
	price?: string;
	isActive?: boolean;
	typeVehicle?: string;
	urlCoverImage?: string;
}
