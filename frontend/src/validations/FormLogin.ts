import * as yup from "yup";

export const schemaLogin = yup.object().shape({
	email: yup.string().email("Deve ser um email válido!").required("Este campo é requerido!"),
	password: yup.string().required("Este campo é requerido!"),
});
