import { IComments } from "../IComments/IComments"
import { IGallery } from "../IGallery/IGallery"
import { IUser } from "../IUser/IUser"

export interface IAds {
    id: string,
	typeAd: string,
	title: string,
	description: string,
	year: number,
	mileage: number,
	price: string,
	isActive: boolean,
	typeVehicle: string,
	urlCoverImage: string
	user: IUser
	gallery: IGallery
	comments: IComments[]
}