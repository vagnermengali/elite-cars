import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { MotorShopContext } from "../../context";
import { FormUpdateComment } from "../../interfaces/FormUpdateComment/FormUpdateComment";
import { InputCommentEditProps } from "../../interfaces/InputCommentEditProps/InputCommentEditProps";
import { schemaCreateComment } from "../../validations/FormCreateComment";
import Button from "../Button";
import Form from "../Form";
import InputTextArea from "../InputTextArea";
import {
	ButtonWrapper,
	Container,
	InputWrapper,
} from "./style";

const InputCommentEdit = ({ idComment, close, description }: InputCommentEditProps) => {
	const {
		updateComment
	} =
		useContext(MotorShopContext);
	const [defaultValue, setDefaultValue] = useState("");

	const { register, handleSubmit } =
		useForm<FormUpdateComment>({
			resolver: yupResolver(schemaCreateComment),
		});

	const handleUpdate = (data: FormUpdateComment) => {
		updateComment(data, idComment);
		close()
	};

	return (
		<Container>
			<Form
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "0.9375rem",
				}}
				onSubmit={handleSubmit(handleUpdate)}
			>
				<InputWrapper>
					<InputTextArea
						name="description"
						placeholder="Digitar comentário"
						width="100%"
						style={{ height: "8rem", margin: 0 }}
						value={defaultValue !== "" ? defaultValue : undefined}
						defaultValue={description}
						offFocus
						offBorder
						register={register}
					/>
					<ButtonWrapper>
						<Button
							color={"grey2"}
							bgcolor={"grey6"}
							hover={{ bgcolor: "grey5" }}
							component="medium"
							width="fullWidth"
							onClick={() => {
								close()
							}}
						>
							Cancelar
						</Button>
						<Button
							type={"submit"}
							component="medium"
							bgcolor={"brand1"}
							color="whiteFixed"
							width="fullWidth"
							hover={{
								bgcolor: "brand2",
							}}
						>
							Salvar
						</Button>
					</ButtonWrapper>
				</InputWrapper>
			</Form>
		</Container>
	);
};

export default InputCommentEdit;
