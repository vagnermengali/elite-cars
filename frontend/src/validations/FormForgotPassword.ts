import * as yup from "yup";

export const schemaSendEmailForgotPassword= yup.object().shape({
	email: yup.string().email("Deve ser um email válido!").required("Este campo é requerido!"),
});

export const schemaRedefinePassword= yup.object().shape({
  password: yup.string().required("Este campo é requerido!"),
  confirmPassword: yup.string().required("Confirme sua senha!").oneOf([yup.ref("password")], "Senha não confere"),
  newPasswordCode: yup.string().required("Este campo é requerido!").trim()
});
