import { useContext } from "react";
import { MotorShopContext } from "../../context";
import Button from "../Button";
import Modal from "../modal";
import { TextQuestion, TextWarning, Div } from "../ModalAdDelete/style";

const ModalDeleteUser = () => {
	document.body.style.overflow = "hidden";
	const { user, deleteUser, desactiveUser, handleCloseModal } = useContext(MotorShopContext);

	const handleClickdeactive = () => {
		desactiveUser(user.id)
		handleCloseModal();
	}

	const handleClickDelete = () => {
		deleteUser(user.id);
		handleCloseModal();
	};

	return (
		<Modal title="Excluir Perfil">
			<TextQuestion>
				Tem certeza que deseja excluir o seu Perfil?
			</TextQuestion>
			<TextWarning>
				Essa ação não pode ser desfeita. Isso excluirá permanentemente
				sua conta e removerá seus dados de nossos servidores.
			</TextWarning>
			<Div>
				<Button
					color={"grey2"}
					bgcolor={"grey6"}
					component={"big"}
					width={"7.875rem"}
					hover={{ bgcolor: "grey5" }}
					onClick={handleCloseModal}
				>
					Cancelar
				</Button>
				<Button
					color={"alert1"}
					bgcolor={"alert3"}
					component={"big"}
					width={"13.1875rem"}
					hover={{ bgcolor: "alert2" }}
					onClick={handleClickdeactive}
				>
					Desativar Perfil
				</Button>
				<Button
					color={"alert1"}
					bgcolor={"alert3"}
					component={"big"}
					width={"13.1875rem"}
					hover={{ bgcolor: "alert2" }}
					onClick={handleClickDelete}
				>
					Sim, exluir Perfil
				</Button>
			</Div>
		</Modal>
	);
};

export default ModalDeleteUser;
