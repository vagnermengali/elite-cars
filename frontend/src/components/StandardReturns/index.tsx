import { StandardsReturnsProps } from "../../interfaces/StandardsReturnsProps/StandardReturnsProps";
import { Container, Message, Title } from "./style";

const StandardReturns = ({ title, children }: StandardsReturnsProps) => {
	return (
		<Container>
			<Title>{title}</Title>
			<Message>{children}</Message>
		</Container>
	);
};

export default StandardReturns;
