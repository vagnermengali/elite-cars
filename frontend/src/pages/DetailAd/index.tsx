import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import CardComment from "../../components/CardComment";
import { FontTwoLatters } from "../../components/Detail/style";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InputComment from "../../components/InputComment";
import Modal from "../../components/modal";
import ModalAdUpdateImage from "../../components/ModalAdUpdateImage";
import PhotoList from "../../components/PhotoList";
import { MotorShopContext } from "../../context";
import { IAds } from "../../interfaces/IAds/IAds";
import { IComments } from "../../interfaces/IComments/IComments";
import api from "../../services";
import {
	BackgroundContent,
	Comments,
	Container,
	Image,
	ContainerInfo,
	InfoAd,
	Main,
	ContainerPriceYearKm,
	InfoKmYear,
	FontPrice,
	InfoVehicle,
	Description,
	InfoAdvertiser,
	Title,
	Content,
	Info,
	UserImg,
	Name,
	ContainerComments,
	ZoomImg,
	FontUserName,
} from "./style";

const DetailAd = () => {
	const {
		ad,
		setAd,
		getUserById,
		openModalImage1,
		openModalImage2,
		openModalImage3,
		openModalImage4,
		openModalImage5,
		openModalImage6,
		userProfile,
		openModaAddImage,
	} = useContext(MotorShopContext);
	const [numComments, setNumComments] = useState(10);
	const [activeCardId, setActiveCardId] = useState<string | null>(null);

	document.body.style.overflow = "unset";
	const navigate = useNavigate();
	const { id } = useParams();

	const gallery = ad.gallery;

	const handleCardClick = (id: string) => {
		if (activeCardId === id) {
			setActiveCardId(null);
		} else {
			setActiveCardId(id);
		}
	};

	const handleCloseAllCards = () => {
		setActiveCardId(null);
	};

	const retrieveAd = async () => {
		try {
			const res = await api.get<IAds>(`/ads/${id}`);
			setAd(res.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		retrieveAd();
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [id]);

	const handleClick = async () => {
		await getUserById(ad.user.id);
		navigate(`/profile/${ad.user.id}`, { replace: true });
	};

	const showMoreComments = () => {
		setNumComments(numComments + 10);
	};

	const twoLetters = () => {
		if (ad.user.name !== undefined) {
			const splitedName = ad.user.name.split(" ");
			const first = splitedName[0][0];
			const second = splitedName.length > 1 ? splitedName[1][0] : "";
			return (
				<FontUserName>{`${first}${second}`.toUpperCase()}</FontUserName>
			);
		}
	};

	return (
		<Container>
			<Header />
			<Main>
				<BackgroundContent />
				<Content>
					<ContainerInfo>
						<InfoAd>
							<Image>
								<img src={ad.urlCoverImage} alt="" />
							</Image>
							<InfoVehicle>
								<p>{ad.title}</p>
								<ContainerPriceYearKm>
									<div>
										<InfoKmYear>{ad.mileage} KM</InfoKmYear>
										<InfoKmYear>{ad.year}</InfoKmYear>
									</div>
									<FontPrice>R$ {ad.price}</FontPrice>
								</ContainerPriceYearKm>
								<a
									href={`https://api.whatsapp.com/send?phone=+55${userProfile.phone}&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20seu%20anúncio,%20${ad.title}!`}
									target="_blank"
									style={{ width: "fit-content" }}
								>
									<Button
										color="whiteFixed"
										bgcolor="brand1"
										component="medium"
										width="8rem"
										hover={{ bgcolor: "brand2" }}
									>
										Comprar
									</Button>
								</a>
							</InfoVehicle>
							<Description align="justify">
								<Title>Descrição</Title>
								{ad.description}
							</Description>
						</InfoAd>
						<InfoAdvertiser>
							{gallery && (
								<>
									<PhotoList
										id={gallery.id}
										urlImage1={gallery.urlImage1}
										urlImage2={gallery.urlImage2}
										urlImage3={gallery.urlImage3}
										urlImage4={gallery.urlImage4}
										urlImage5={gallery.urlImage5}
										urlImage6={gallery.urlImage6}
									/>
									<Info>
										<UserImg avatarColor={ad.user.avatarColor}>
											{twoLetters()}
										</UserImg>
										<Name>{ad.user.name}</Name>
										<Description align="center">
											{ad.user.description}
										</Description>
										<Button
											color="whiteFixed"
											bgcolor="grey0"
											component="medium"
											width="14rem"
											onClick={handleClick}
										>
											Ver todos os anúncios
										</Button>
									</Info>
								</>
							)}
						</InfoAdvertiser>
					</ContainerInfo>
					<ContainerComments>
						{ad.comments && (
							<>
								<Comments>
									<Title>Comentários</Title>
									{ad.comments.length === 0 ? (
										<span>
											Ainda não há comentários neste
											anúncio
										</span>
									) : (
										<>
											{ad.comments
												.sort(
													(a, b) =>
														new Date(
															b.createdAt
														).getTime() -
														new Date(
															a.createdAt
														).getTime()
												)
												.slice(0, numComments)
												.map((elem: IComments) => (
													<CardComment
														key={elem.id}
														name={elem.owner.name}
														id={elem.id}
														idOwner={elem.owner.id}
														description={
															elem.description
														}
														isActive={
															activeCardId ===
															elem.id
														}
														time={elem.createdAt}
														create={elem.createdAt}
														update={elem.updatedAt}
														avatarColor={
															elem.owner
																.avatarColor
														}
														close={
															handleCloseAllCards
														}
														open={handleCardClick}
													/>
												))}
											<>
												{ad.comments.length >=
												numComments + 1 ? (
													<Button
														color={"brand1"}
														bgcolor={"tranparent"}
														component={"medium"}
														onClick={
															showMoreComments
														}
														hover={{
															color: "brand3",
														}}
													>
														Ver mais
													</Button>
												) : null}
											</>
										</>
									)}
								</Comments>
							</>
						)}
						<InputComment />
					</ContainerComments>
				</Content>
				{openModalImage1 && (
					<Modal title="Imagem do veículo">
						<ZoomImg
							src={gallery.urlImage1}
							alt=""
							style={{ maxWidth: "29.0625rem", maxHeight: "15rem" }}
						/>
					</Modal>
				)}
				{openModalImage2 && (
					<Modal title="Imagem do veículo">
						<ZoomImg
							src={gallery.urlImage2}
							alt=""
							style={{ maxWidth: "29.0625rem", maxHeight: "15rem" }}
						/>
					</Modal>
				)}
				{openModalImage3 && (
					<Modal title="Imagem do veículo">
						<ZoomImg
							src={gallery.urlImage3}
							alt=""
							style={{ maxWidth: "29.0625rem", maxHeight: "15rem" }}
						/>
					</Modal>
				)}
				{openModalImage4 && (
					<Modal title="Imagem do veículo">
						<ZoomImg
							src={gallery.urlImage4}
							alt=""
							style={{ maxWidth: "29.0625rem", maxHeight: "15rem" }}
						/>
					</Modal>
				)}
				{openModalImage5 && (
					<Modal title="Imagem do veículo">
						<ZoomImg
							src={gallery.urlImage5}
							alt=""
							style={{ maxWidth: "29.0625rem", maxHeight: "15rem" }}
						/>
					</Modal>
				)}
				{openModalImage6 && (
					<Modal title="Imagem do veículo">
						<ZoomImg
							src={gallery.urlImage6}
							alt=""
							style={{ maxWidth: "29.0625rem", maxHeight: "15rem" }}
						/>
					</Modal>
				)}
				{openModaAddImage && <ModalAdUpdateImage />}
			</Main>
			<Footer />
		</Container>
	);
};

export default DetailAd;
