import { useForm } from "react-hook-form";
import Form from "../Form";
import Input from "../Input";
import Modal from "../modal";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaUpdateUser } from "../../validations/FormUpdateUser";
import { Fieldset } from "../../pages/Register/styles";
import InputTextArea from "../InputTextArea";
import { Div } from "../ModalAdCreate/style";
import Button from "../Button";
import { FormUpdateUser } from "../../interfaces/FormUpdateUser/FormUpdateUser";
import { useContext } from "react";
import { MotorShopContext } from "../../context";

const ModalEditUser = () => {
	const { user, updateUser, handleCloseModal, setOpenModalDeleteUser } =
		useContext(MotorShopContext);
	const { name, email, cpf, phone, birthday, description } = user;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormUpdateUser>({
		resolver: yupResolver(schemaUpdateUser),
	});

	const handleClickDelete = () => {
		handleCloseModal();
		setOpenModalDeleteUser(true);
	};

	return (
		<Modal title="Editar Perfil">
			<Form onSubmit={handleSubmit(updateUser)}>
				<Fieldset>
					<p>Informações pessoais</p>
					<Input
						label="Nome"
						type="text"
						placeholder="Digitar nome"
						defaultValue={name}
						register={register}
						name="name"
						error={errors.name}
					/>
					<Input
						label="Email"
						type="text"
						placeholder="samuel@kenzie.com.br"
						defaultValue={email}
						register={register}
						name="email"
						error={errors.email}
					/>
					<Input
						label="CPF"
						type="text"
						placeholder="000.000.000-09"
						defaultValue={cpf}
						register={register}
						name="cpf"
						error={errors.cpf}
					/>
					<Input
						label="Celular"
						type="text"
						placeholder="(024) 99921-2165"
						defaultValue={phone}
						register={register}
						name="phone"
						error={errors.phone}
					/>
					<Input
						label="Data de Nascimento"
						type="text"
						placeholder="09/12/90"
						defaultValue={birthday}
						register={register}
						name="birthday"
						error={errors.birthday}
					/>
					<InputTextArea
						label="Descrição"
						name="description"
						placeholder="Digitar descrição"
						defaultValue={description}
						register={register}
						error={errors.description}
					/>
				</Fieldset>
				<Div>
					<Button
						type="button"
						color={"grey2"}
						bgcolor={"grey6"}
						component={"big"}
						width={"9.375rem"}
						hover={{ bgcolor: "grey5" }}
						onClick={handleClickDelete}
					>
						Excluir Perfil
					</Button>
					<Button
						type="submit"
						color={"whiteFixed"}
						bgcolor={"brand1"}
						component={"big"}
						width={"12.0625rem"}
						hover={{ bgcolor: "brand2" }}
					>
						Salvar alterações
					</Button>
				</Div>
			</Form>
		</Modal>
	);
};

export default ModalEditUser;
