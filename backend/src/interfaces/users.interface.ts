import Address from "../entities/address.entity";

export interface IUserRequest {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthday: string;
  description: string;
  advertiser: boolean;
  password: string;
  isAdm: boolean;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
}

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
  password: string;
  isAdm: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  birthday?: string;
  description?: string;
  password?: string;
}

export interface IUpdatePassword {
  id: string;
  password: string;
  newPasswordCode: string;
  user: string;
}
