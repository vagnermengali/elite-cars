export interface IAddressRequest {
  	cep: string;
	state: string,
	city: string,
	street: string,
	number: string,
	complement: string
}

export interface IAddress {
  id: string,
  cep: string;
  state: string,
  city: string,
  street: string,
  number: string,
  complement: string,
  createdAt: Date,
  updatedAt: Date,
}

export interface IAddressUpdate {
  	cep: string;
	state: string,
	city: string,
	street: string,
	number: string,
	complement: string
}
