import Button from "../../components/Button";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import {
	ContainerButtons,
	ContainerInfo,
	InfoHome,
	InfoSection,
	TitleHome,
} from "./style";
import { useContext, useEffect } from "react";
import { MotorShopContext } from "../../context";

const Home = () => {
	document.body.style.overflow = "unset";
	const { randomAds, getRandomAds, setPrevLocation } = useContext(MotorShopContext);

	useEffect(() => {
		getRandomAds();
		setPrevLocation(location.pathname)
	}, []);

	return (
		<>
			<Header />
			<main id="#home" style={{ minHeight: "calc(100vh - 11.25rem)"}}>
				<InfoSection>
					<ContainerInfo>
						<TitleHome>
							Velocidade e experiência em um lugar feito para você
						</TitleHome>
						<InfoHome>
							Um ambiente feito para você explorar o seu melhor
						</InfoHome>
						<ContainerButtons>
							<Button
								component="big"
								bgcolor="tranparent"
								color="grey10"
								border="grey10"
								width="fullWidth"
								hover={{
									bgcolor: "whiteFixed",
									color: "grey1",
								}}
							>
								Carros
							</Button>
							<Button
								component="big"
								bgcolor="tranparent"
								color="grey10"
								border="grey10"
								width="fullWidth"
								hover={{
									bgcolor: "whiteFixed",
									color: "grey1",
								}}
							>
								Motos
							</Button>
						</ContainerButtons>
					</ContainerInfo>
				</InfoSection>

				<Section
					id="leilao"
					titleSection="Leilão"
					value="Leilão"
					vehicles={randomAds}
					auction={true}
				/>
				<Section
					id="carros"
					titleSection="Carros"
					value="Carro"
					vehicles={randomAds}
					auction={false}
				/>
				<Section
					id="motos"
					titleSection="Motos"
					value="Moto"
					vehicles={randomAds}
					auction={false}
				/>
			</main>
			<Footer />
		</>
	);
};

export default Home;
