import { yupResolver } from "@hookform/resolvers/yup";
import { BaseSyntheticEvent, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Input from "../../components/Input";
import InputChoices from "../../components/InputChoices";
import InputTextArea from "../../components/InputTextArea";
import ModalRegisterUserSuccess from "../../components/ModalRegisterUserSuccess";
import { MotorShopContext } from "../../context";
import { IRegisterUser } from "../../interfaces/IRegisterUser/IRegisterUser";
import { schemaRegisterUser } from "../../validations/FormRegisterUser";
import { Container, ContainerForm, Fieldset, Main, Title } from "./styles";
import { cepApi } from "../../services";

const Register = () => {
  const { registerUser, openModalRegisterUserSuccess, cep } =
    useContext(MotorShopContext);

  const [selectedIsAdvertiser, setSelectedIsAdvertiser] = useState<
    string | void
  >("Comprador");

  document.body.style.overflow = "unset";

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({
    mode: "onChange",
    resolver: yupResolver(schemaRegisterUser),
  });

  useEffect(() => {
    if (cep.length >= 8) {
      cepApi.get(`${cep}/json/`).then((res) => {
        setValue("state", res.data.uf);
        setValue("city", res.data.localidade);
        setValue("street", res.data.logradouro);
      });
    }
  }, [cep]);

  const newRegisterUser = (data: IRegisterUser) => {
    const newData = {
      ...data,
      advertiser: selectedIsAdvertiser === "Anunciante" ? true : false,
    };
    registerUser(newData);
  };

  return (
    <Container>
      <Header />
      <Main>
        <ContainerForm>
          <Title>Cadastro</Title>
          <Form onSubmit={handleSubmit(newRegisterUser)}>
            <Fieldset style={{ gap: 0 }}>
              <p>Informações pessoais</p>
              <Input
                label="Nome"
                type="text"
                placeholder="Ex: Samuel Leão"
                name="name"
                register={register}
                error={errors.name}
              />
              <Input
                label="Email"
                type="text"
                placeholder="Ex: samuel@kenzie.com.br"
                name="email"
                register={register}
                error={errors.email}
              />
              <Input
                label="CPF"
                type="text"
                placeholder="000.000.000-00"
                name="cpf"
                register={register}
                error={errors.cpf}
              />
              <Input
                label="Celular"
                type="text"
                placeholder="(DDD) 90000-0000"
                name="phone"
                register={register}
                error={errors.phone}
              />
              <Input
                label="Data de Nascimento"
                type="text"
                placeholder="00/00/00"
                name="birthday"
                register={register}
                error={errors.birthday}
              />

              <InputTextArea
                label="Descrição"
                placeholder="Digitar descrição"
                name="description"
                register={register}
                error={errors.description}
              />
            </Fieldset>
            <Fieldset>
              <p>Informações de endereço</p>

              <Input
                label="CEP"
                type="text"
                placeholder="00000.000"
                name="cep"
                register={register}
                error={errors.cep}
              />

              <Fieldset style={{ flexDirection: "row", gap: "0.5rem" }}>
                <Input
                  label="Estado"
                  type="text"
                  placeholder="Digitar Estado"
                  name="state"
                  register={register}
                  error={errors.state}
                />

                <Input
                  label="Cidade"
                  type="text"
                  placeholder="Digitar cidade"
                  name="city"
                  register={register}
                  error={errors.city}
                />
              </Fieldset>

              <Input
                label="Rua"
                type="text"
                placeholder="Digitar rua"
                name="street"
                register={register}
                error={errors.street}
              />

              <Fieldset style={{ flexDirection: "row", gap: "0.5rem" }}>
                <Input
                  label="Número"
                  type="text"
                  placeholder="Digitar número"
                  name="number"
                  register={register}
                  error={errors.number}
                />

                <Input
                  label="Complemento"
                  type="text"
                  placeholder="Ex: apart 307"
                  name="complement"
                  register={register}
                  error={errors.complement}
                />
              </Fieldset>
            </Fieldset>

            <Fieldset>
              <InputChoices
                label="Tipo de conta"
                name="advertiser"
                choice1="Comprador"
                choice2="Anunciante"
                register={register}
                error={errors.advertiser}
                value={`${selectedIsAdvertiser}`}
                setSelectedValue={setSelectedIsAdvertiser}
              />
            </Fieldset>

            <Fieldset>
              <Input
                label="Senha"
                type="password"
                placeholder="Digitar senha"
                name="password"
                register={register}
                error={errors.password}
              />
              <Input
                label="Confirmar de Senha"
                type="password"
                placeholder="Digitar senha"
                name="confirmPassword"
                register={register}
                error={errors.confirmPassword}
              />
            </Fieldset>

            <Fieldset style={{ textAlign: "center", padding: "1rem 0" }}>
              <Button
                color={"whiteFixed"}
                bgcolor={"brand1"}
                component={"big"}
                width={"100%"}
                hover={{ bgcolor: "brand2" }}
                type="submit"
              >
                Finalizar Cadastro
              </Button>
            </Fieldset>
          </Form>
        </ContainerForm>
        {openModalRegisterUserSuccess && <ModalRegisterUserSuccess />}
      </Main>
      <Footer />
    </Container>
  );
};

export default Register;
