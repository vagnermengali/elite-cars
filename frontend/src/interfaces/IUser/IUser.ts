import { IAddress } from "../IAddress/IAddress";
import { IAds } from "../IAds/IAds";

export interface IUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthday: string;
  description: string;
  advertiser: boolean;
  avatarColor: string;
  newPassrwordCode: string | null;
  isActive: boolean;
  isAdm: boolean;
  address: IAddress;
  ads: IAds[];
  comments: Comment[];
}
