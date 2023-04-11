export interface IFormUpdateAd {
	typeAd?: string | void;
	title?: string;
	description?: string;
	year?: number;
	mileage?: number;
	price?: string;
	isActive?: boolean;
	typeVehicle?: string | void;
	urlCoverImage?: string;
	urlImage1?: string;
	urlImage2?: string;
	urlImage3?: string;
	urlImage4?: string;
	urlImage5?: string;
	urlImage6?: string;
	galleryId?: string;
}

export interface IFormUpdateAdGallery {
	urlImage1?: string;
	urlImage2?: string;
	urlImage3?: string;
	urlImage4?: string;
	urlImage5?: string;
	urlImage6?: string;
	galleryId?: string;
}
