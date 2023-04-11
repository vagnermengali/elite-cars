import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { Container, Fieldset, Title } from "./styles";
import { schemaSendEmailForgotPassword } from "../../validations/FormForgotPassword";
import { ISendEmailForgotPassword } from "../../interfaces/IFormForgotPassword/IFormForgotPassword";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MotorShopContext } from "../../context";

const SendEmailForgotPassword = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISendEmailForgotPassword>({
		resolver: yupResolver(schemaSendEmailForgotPassword),
	});
	const { sendEmailRedefinePassword } = useContext(MotorShopContext);
	const navigate = useNavigate();

	return (
		<Container>
			<Title>
				Esqueci minha senha
				<p>
					Para redefinir sua senha, informe seu email cadastrado e lhe
					enviaremos um email de validação.
				</p>
			</Title>
			<Form onSubmit={handleSubmit(sendEmailRedefinePassword)}>
				<Fieldset style={{ gap: 0 }}>
					<Input
						label="Email"
						type="text"
						placeholder="Digitar email"
						register={register}
						error={errors.email}
						name="email"
					/>
				</Fieldset>

				<Fieldset style={{ textAlign: "center", padding: "1rem 0" }}>
					<Button
						color={"whiteFixed"}
						bgcolor={"brand1"}
						component={"big"}
						width={"100%"}
						type="submit"
						hover={{ bgcolor: "brand2" }}
					>
						Enviar
					</Button>

					<Button
						color={"grey0"}
						bgcolor={"grey6"}
						component={"big"}
						width={"100%"}
						hover={{ bgcolor: "grey5" }}
						onClick={() => navigate("/login")}
					>
						Cancelar
					</Button>
				</Fieldset>
			</Form>
		</Container>
	);
};

export default SendEmailForgotPassword;
