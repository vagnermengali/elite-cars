import * as yup from "yup";

export const schemaCreateComment = yup.object().shape({
	description: yup.string().required("Este campo é obrigatório!"),
});
