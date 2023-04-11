import { IUser } from "../IUser/IUser"

export interface IComments {
    id: string,
    description: string,
    owner: IUser,
    createdAt: string,
    updatedAt: string
}