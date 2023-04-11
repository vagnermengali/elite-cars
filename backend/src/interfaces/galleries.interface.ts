import Ad from "../entities/ad.entity";

export interface IGalleryRequest {
	adId: string;
	urlImage1: string;
	urlImage2?: string;
	urlImage3?: string;
	urlImage4?: string;
	urlImage5?: string;
	urlImage6?: string;
}

export interface IGallery {
	id: string;
	urlImage1: string;
	urlImage2: string;
	urlImage3: string;
	urlImage4: string;
	urlImage5: string;
	urlImage6: string;
	createdAt: Date;
	updatedAt: Date;
	ad: Ad;
}

export interface IGalleryUpdate {
	urlImage1?: string;
	urlImage2?: string;
	urlImage3?: string;
	urlImage4?: string;
	urlImage5?: string;
	urlImage6?: string;
}
