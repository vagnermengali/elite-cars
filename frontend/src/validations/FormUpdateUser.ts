import * as yup from "yup";

export const schemaUpdateUser = yup.object().shape({
	name: yup.string().trim(),
	email: yup.string().email("Deve ser um email válido").trim(),
	cpf: yup.string().trim(),
	phone: yup.string().trim(),
	birthday: yup.string().trim(),
	description: yup.string().trim(),
});
