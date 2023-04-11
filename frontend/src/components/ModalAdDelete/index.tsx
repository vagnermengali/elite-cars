import { useContext } from "react";
import { MotorShopContext } from "../../context";
import Button from "../Button";
import Modal from "../modal";
import { TextQuestion, TextWarning, Div } from "./style";

const ModalAdDelete = () => {
	document.body.style.overflow = "hidden";
	const { ad, deleteAd, handleCloseModal } = useContext(MotorShopContext);

	const handleClick = () => {
		deleteAd(ad.id);
		handleCloseModal();
	};

	return (
		<Modal title={"Excluir anúncio"}>
			<TextQuestion>
				Tem certeza que deseja remover este anúncio?
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
				>
					Cancelar
				</Button>
				<Button
					color={"alert1"}
					bgcolor={"alert3"}
					component={"big"}
					width={"13.1875rem"}
					hover={{ bgcolor: "alert2" }}
					onClick={handleClick}
				>
					Sim, exluir anúncio
				</Button>
			</Div>
		</Modal>
	);
};

export default ModalAdDelete;
