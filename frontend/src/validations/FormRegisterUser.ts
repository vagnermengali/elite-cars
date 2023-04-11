import * as yup from "yup";

export const schemaRegisterUser = yup.object().shape({
  name: yup.string().required("Este campo é requerido!"),
  email: yup.string().email("Deve ser um email válido!").required("Este campo é requerido!"),
  cpf: yup.string().required("Este campo é requerido!"),
  phone: yup.string().required("Este campo é requerido!"),
  birthday: yup.string().required("Este campo é requerido!"),
  description: yup.string().required("Este campo é requerido!"),
  password: yup.string().required("Este campo é requerido!"),
  confirmPassword: yup.string().required("Confirme sua senha!").oneOf([yup.ref("password")], "Senha não confere"),
  cep: yup.string().required("Este campo é requerido!"),
  state: yup.string().required("Este campo é requerido!"),
  city: yup.string().required("Este campo é requerido!"),
  street: yup.string().required("Este campo é requerido!"),
  number:  yup.number().required("Este campo é requerido!").typeError("Deve ser um número!"),
  complement: yup.string().required("Este campo é requerido!"),
});