import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MotorShopContext } from "../../context";
import Button from "../Button";
import Modal from "../modal";
import StandardReturns from "../StandardReturns";

const ModalRegisterUserSuccess = () => {
  const { handleCloseModal } = useContext(MotorShopContext);
  const navigate = useNavigate();

  const handleClick = () => {
    handleCloseModal();
    navigate("/login", { replace: true });
  };

  return (
    <Modal title="Sucesso!">
      <StandardReturns title="Sua conta foi criada com sucesso!">
        Agora você poderá ver seus negócios crescendo em grande escala
      </StandardReturns>
      <Button
        component="medium"
        bgcolor="brand1"
        color="whiteFixed"
        width="8.25rem"
        hover={{ bgcolor: "brand2" }}
        onClick={handleClick}
      >
        Ir para o login
      </Button>
    </Modal>
  );
};

export default ModalRegisterUserSuccess;
