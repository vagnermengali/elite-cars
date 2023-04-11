import { StyledFooter, Image, Button, Text } from "./style";
import logo from "../../assets/img/logo-white.svg";
import { FaAngleUp } from "react-icons/fa";

const Footer = () => {
	const handleScrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	  };
	return (
		<StyledFooter>
			<Image src={logo} alt='motors-shop'/>
			<Text>© {new Date().getFullYear()} -  Todos os direitos reservados.</Text>
			<Button onClick={handleScrollTop}><FaAngleUp/></Button>
		</StyledFooter>
	)

};

export default Footer;
