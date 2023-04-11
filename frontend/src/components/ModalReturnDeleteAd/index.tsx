import Modal from "../modal";
import StandardReturns from "../StandardReturns";

const ModalReturnDeleteAd = () => {
	return (
		<Modal title="Sucesso!">
			<StandardReturns title="Seu anúncio foi excluído com sucesso!">
				Agora você poderá criar novos anúncios
			</StandardReturns>
		</Modal>
	);
};

export default ModalReturnDeleteAd;
