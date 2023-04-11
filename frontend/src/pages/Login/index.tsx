import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { MotorShopContext } from "../../context";
import { ILogin } from "../../interfaces/ILogin/ILogin";
import { schemaLogin } from "../../validations/FormLogin";
import { Container, ContainerForm, Fieldset, Main, Title } from "./styles";

const Login = () => {
	const { signIn } = useContext(MotorShopContext);
	document.body.style.overflow = "unset";
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILogin>({
		resolver: yupResolver(schemaLogin),
	});
	const navigate = useNavigate();

	return (
		<Container>
			<Header />
			<Main>
				<ContainerForm>
					<Title>Login</Title>
					<Form onSubmit={handleSubmit(signIn)}>
						<Fieldset style={{ gap: 0 }}>
							<Input
								label="Email"
								type="text"
								placeholder="Digitar email"
								register={register}
								name="email"
							/>
							<Input
								label="Senha"
								type="password"
								placeholder="Digitar senha"
								register={register}
								name="password"
							/>
						</Fieldset>
						<Link to="/forgot-password">Esqueci minha senha</Link>

						<Fieldset
							style={{ textAlign: "center", padding: "1rem 0" }}
						>
							<Button
								color={"whiteFixed"}
								bgcolor={"brand1"}
								component={"big"}
								width={"100%"}
								hover={{ bgcolor: "brand2" }}
								type="submit"
							>
								Entrar
							</Button>
							Ainda não possui uma conta?
							<Button
								color={"grey0"}
								bgcolor={"grey10"}
								border={"grey4"}
								component={"big"}
								width={"100%"}
								hover={{
									bgcolor: "grey0",
									color: "whiteFixed",
								}}
								onClick={() => navigate("/register")}
							>
								Cadastrar
							</Button>
						</Fieldset>
					</Form>
				</ContainerForm>
			</Main>
			<Footer />
		</Container>
	);
};

export default Login;
