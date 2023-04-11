import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { MotorShopContext } from "../../context";
import { FormCreateComment } from "../../interfaces/FormCreateComment/FormCreateComment";
import { schemaCreateComment } from "../../validations/FormCreateComment";
import Button from "../Button";
import Detail from "../Detail";
import Form from "../Form";
import InputTextArea from "../InputTextArea";
import {
	ButtonWrapper,
	Container,
	InputWrapper,
	Span,
	SpansWrapper,
} from "./style";

const InputComment = () => {
	const { isLoggedIn, user, createComment, ad, setPrevLocation } =
		useContext(MotorShopContext);
	const [defaultValue, setDefaultValue] = useState("");
	const navigate = useNavigate();
	const location = useLocation();
	const { register, handleSubmit, reset, setValue } =
		useForm<FormCreateComment>({
			resolver: yupResolver(schemaCreateComment),
		});

	const handleClick = (data: FormCreateComment) => {
		const { description } = data;
		const newData = {
			description: defaultValue === "" ? description : defaultValue,
			adId: ad.id,
		};
		createComment(newData);
		setDefaultValue("");
		reset();
		setValue("description", "");
	};

	const handlePrevLocation = (route: string) => {
		setPrevLocation(route);
	};

	return (
		<Container>
			{isLoggedIn && (
				<Detail avatarColor={user.avatarColor} name={user.name} />
			)}
			<Form
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "0.9375rem",
				}}
				onSubmit={handleSubmit(handleClick)}
			>
				<InputWrapper>
					<InputTextArea
						name="description"
						placeholder="Digitar comentário"
						width="100%"
						style={{ height: "8rem", margin: 0 }}
						value={defaultValue !== "" ? defaultValue : undefined}
						offFocus
						offBorder
						register={register}
					/>
					<ButtonWrapper>
						<Button
							type={isLoggedIn ? "submit" : "button"}
							component="medium"
							bgcolor={isLoggedIn ? "brand1" : "brand3"}
							color="whiteFixed"
							width="fullWidth"
							hover={{
								bgcolor: isLoggedIn ? "brand2" : "brand3",
							}}
							onClick={() => {
								handlePrevLocation(location.pathname);
								!isLoggedIn && navigate("/login");
							}}
						>
							Comentar
						</Button>
					</ButtonWrapper>
				</InputWrapper>
				<SpansWrapper>
					<Span onClick={() => setDefaultValue("Gostei muito!")}>
						Gostei muito!
					</Span>
					<Span onClick={() => setDefaultValue("Incrível")}>
						Incrível
					</Span>
					<Span
						onClick={() =>
							setDefaultValue("Recomendarei para meus amigos!")
						}
					>
						Recomendarei para meus amigos!
					</Span>
				</SpansWrapper>
			</Form>
		</Container>
	);
};

export default InputComment;
