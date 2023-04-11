import * as yup from "yup";

export const schemaUpdateAddressUser = yup.object().shape({
	cep: yup.string(),
	state: yup.string(),
	city: yup.string(),
	street: yup.string(),
	number: yup.string(),
	complement: yup.string(),
});
