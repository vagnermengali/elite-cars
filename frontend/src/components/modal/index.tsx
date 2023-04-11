import { ReactNode, useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { MotorShopContext } from "../../context";
import { Card, Children, Container, Content, Title } from "./style";

interface IModal {
	title: string;
	children: ReactNode;
}

const Modal = ({ title, children }: IModal) => {
	const { handleCloseModal } = useContext(MotorShopContext);
	document.body.style.overflow = "hidden";
	
	return (
		<Container>
			<Card>
				<Title>
					{title}
					<IoCloseOutline size={24} onClick={handleCloseModal} />
				</Title>
				<Content>
					<Children>{children}</Children>
				</Content>
			</Card>
		</Container>
	);
};

export default Modal;
