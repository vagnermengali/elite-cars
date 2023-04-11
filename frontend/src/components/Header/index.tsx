import {
	StyledHeader,
	Image,
	Link,
	Nav,
	DivNav,
	Divise,
	Text,
	FontTwoLatters,
	Profile,
	DropDown,
	DivBar,
	Menu,
	Divider,
	Sidebar,
	LinkBar,
	Settings,
	MenuAnimation,
	MenuBurger,
	DivButton,
	ContainerUser,
	FontUserName,
	UserImg,
	DivProfile,
	ButtonAnimation,
} from "./style";
import logo from "../../assets/img/logo.svg";
import Button from "../Button";
import { useContext, useEffect, useState } from "react";
import { MotorShopContext } from "../../context";
import { useNavigate, useLocation } from "react-router-dom";
import ModalEditUser from "../ModalEditUser";
import ModalEditAddressUser from "../ModalEditAddressUser";
import ModalDeleteUser from "../ModalDeleteUser";
import { Link as LinkScroll, scroller } from "react-scroll";

const Header = ({ auction, colorFont, image }: any) => {
	const [dropDown, setDropDown] = useState<number>(0);
	const [location, setLocation] = useState<boolean>(true);
	const [isSideBarVisible, setIsSideBarVisible] = useState<boolean>(false);
	const {
		isLoggedIn,
		user: { id, name, advertiser, avatarColor },
		getUserByProfile,
		modalEditUser,
		setModalEditUser,
		openModalUpdateAddresUser,
		setOpenModalUpdateAddresUser,
		openModalDeleteUser,
		logout,
	} = useContext(MotorShopContext);
	const navigate = useNavigate();
	const showSideBar = () => setIsSideBarVisible(!isSideBarVisible);
	const [backgroundColor, setBackgroundColor] = useState<string | undefined>(
		undefined
	);
	const locationRoute = useLocation();

	const handleLocation = async () => {
		if (locationRoute.pathname === "/homepage") {
			setLocation(true);
		} else {
			setLocation(false);
		}
	};
	useEffect(() => {
		handleLocation();
	}, []);

	const handleClickProfile = async () => {
		await getUserByProfile();
		navigate(`/profile/${id}`);
	};

	const handleClickdropDownProfile = () => {
		if (dropDown === 0) {
			setDropDown(1);
		} else {
			setDropDown(0);
		}
	};

	const twoLetters = () => {
		if (name !== undefined) {
			const splitedName = name.split(" ");
			const first = splitedName[0][0];
			const second = splitedName.length > 1 ? splitedName[1][0] : "";
			return (
				<FontTwoLatters>
					{`${first}${second}`.toUpperCase()}
				</FontTwoLatters>
			);
		}
	};

	const scrollToCarroSection = (route: string) => {
		scroller.scrollTo(route, {
			duration: 1500,
			delay: 100,
			smooth: "easeInOutQuart",
			spy: true,
			hashSpy: true,
			offset: -40,
			isDynamic: true,
			ignoreCancelEvents: false,
		});
	};

	const handleButtonClick = (routes: string) => {
		navigate("/homepage");
		setTimeout(() => scrollToCarroSection(routes), 500);
	};

	return (
		<>
			<StyledHeader>
				<Image
					src={logo}
					alt="logo-motor-shop"
					onClick={() => navigate("/homepage")}
				/>
				<Nav>
					<DivNav>
						<MenuBurger onClick={showSideBar}>
							<MenuAnimation
								isSideBarVisible={isSideBarVisible}
								onClick={showSideBar}
							></MenuAnimation>
						</MenuBurger>
						{location ? (
							<>
								<LinkScroll
									className="link"
									activeClass="active"
									to="carros"
									spy={true}
									smooth={true}
									hashSpy={true}
									offset={-40}
									duration={1500}
									delay={100}
									isDynamic={true}
									ignoreCancelEvents={false}
									onClick={showSideBar}
								>
									Carros
								</LinkScroll>
								<LinkScroll
									className="link"
									activeClass="active"
									to="motos"
									spy={true}
									smooth={true}
									hashSpy={true}
									offset={-40}
									duration={1500}
									delay={100}
									isDynamic={true}
									ignoreCancelEvents={false}
									onClick={showSideBar}
								>
									Motos
								</LinkScroll>
								<LinkScroll
									className="link"
									activeClass="active"
									to="leilao"
									spy={true}
									smooth={true}
									hashSpy={true}
									offset={-40}
									duration={1500}
									delay={100}
									isDynamic={true}
									ignoreCancelEvents={false}
									onClick={showSideBar}
								>
									Leilão
								</LinkScroll>
							</>
						) : (
							<>
								<ButtonAnimation
									className="link"
									onClick={() => handleButtonClick("carros")}
								>
									Carros
								</ButtonAnimation>
								<ButtonAnimation
									className="link"
									onClick={() => handleButtonClick("motos")}
								>
									Motos
								</ButtonAnimation>
								<ButtonAnimation
									className="link"
									onClick={() => handleButtonClick("leilao")}
								>
									Leilão
								</ButtonAnimation>
							</>
						)}
					</DivNav>
					<Divise />
					<DivProfile>
						{!isLoggedIn ? (
							<>
								<DivButton>
									<Button
										color={"brand1"}
										bgcolor={"grey10"}
										component={"big"}
										width={"8.3125rem"}
										onClick={() => navigate(`/login`)}
									>
										Fazer Login
									</Button>
									<Button
										color={"grey0"}
										bgcolor={"grey10"}
										component={"big"}
										border={"grey4"}
										width={"8.3125rem"}
										hover={{
											bgcolor: "grey1",
											color: "whiteFixed",
										}}
										onClick={() => navigate(`/register`)}
									>
										Cadastrar
									</Button>
								</DivButton>
							</>
						) : (
							<>
								<Profile>
									<ContainerUser
										onClick={() =>
											handleClickdropDownProfile()
										}
									>
										<UserImg colorRandom={avatarColor}>
											{image ? image : twoLetters()}
										</UserImg>
										<FontUserName
											auction={auction}
											colorFont={colorFont}
										>
											{name}
										</FontUserName>
									</ContainerUser>
									{!advertiser ? (
										<>
											<DropDown dropdown={dropDown}>
												<Text
													onClick={() => {
														handleClickdropDownProfile();
														setModalEditUser(true);
													}}
												>
													Editar Perfil
												</Text>
												<Text
													onClick={() => {
														handleClickdropDownProfile();
														setOpenModalUpdateAddresUser(
															true
														);
													}}
												>
													Editar Endereço
												</Text>
												<Text
													onClick={() => {
														logout();
														handleClickdropDownProfile();
													}}
												>
													Sair
												</Text>
											</DropDown>
										</>
									) : (
										<>
											<DropDown dropdown={dropDown}>
												<Text
													onClick={() => {
														handleClickdropDownProfile();
														setModalEditUser(true);
													}}
												>
													Editar Perfil
												</Text>
												<Text
													onClick={() => {
														handleClickdropDownProfile();
														setOpenModalUpdateAddresUser(
															true
														);
													}}
												>
													Editar Endereço
												</Text>
												<Text
													onClick={handleClickProfile}
												>
													Meus Anúncios
												</Text>
												<Text
													onClick={() => {
														logout();
														handleClickdropDownProfile();
													}}
												>
													Sair
												</Text>
											</DropDown>
										</>
									)}
								</Profile>
							</>
						)}
						{isSideBarVisible && !isLoggedIn ? (
							<Sidebar isSideBarVisible={isSideBarVisible}>
								<Menu>
									<DivBar>
										{location ? (
											<>
												<LinkScroll
													className="link-mobile"
													activeClass="active"
													to="carros"
													spy={true}
													smooth={true}
													hashSpy={true}
													offset={-40}
													duration={1500}
													delay={100}
													isDynamic={true}
													ignoreCancelEvents={false}
													onClick={showSideBar}
												>
													Carros
												</LinkScroll>
												<LinkScroll
													className="link-mobile"
													activeClass="active"
													to="motos"
													spy={true}
													smooth={true}
													hashSpy={true}
													offset={-40}
													duration={1500}
													delay={100}
													isDynamic={true}
													ignoreCancelEvents={false}
													onClick={showSideBar}
												>
													Motos
												</LinkScroll>
												<LinkScroll
													className="link-mobile"
													activeClass="active"
													to="leilao"
													spy={true}
													smooth={true}
													hashSpy={true}
													offset={-40}
													duration={1500}
													delay={100}
													isDynamic={true}
													ignoreCancelEvents={false}
													onClick={showSideBar}
												>
													Leilão
												</LinkScroll>
											</>
										) : (
											<>
												<ButtonAnimation
													className="link-mobile"
													onClick={() =>
														handleButtonClick(
															"carros"
														)
													}
												>
													Carros
												</ButtonAnimation>
												<ButtonAnimation
													className="link-mobile"
													onClick={() =>
														handleButtonClick(
															"motos"
														)
													}
												>
													Motos
												</ButtonAnimation>
												<ButtonAnimation
													className="link-mobile"
													onClick={() =>
														handleButtonClick(
															"leilao"
														)
													}
												>
													Leilão
												</ButtonAnimation>
											</>
										)}
									</DivBar>
									<Divider />
									<DivBar>
										<LinkBar href="/login">
											Fazer Login
										</LinkBar>
										<Button
											color={"grey0"}
											bgcolor={"grey10"}
											component={"big"}
											border={"grey4"}
											width={"fullWidth"}
										>
											Cadastrar
										</Button>
									</DivBar>
								</Menu>
							</Sidebar>
						) : (
							<Sidebar isSideBarVisible={isSideBarVisible}>
								<Menu>
									<DivBar>
										{location ? (
											<>
												<LinkScroll
													className="link-mobile"
													activeClass="active"
													to="carros"
													spy={true}
													smooth={true}
													hashSpy={true}
													offset={-40}
													duration={1500}
													delay={100}
													isDynamic={true}
													ignoreCancelEvents={false}
													onClick={showSideBar}
												>
													Carros
												</LinkScroll>
												<LinkScroll
													className="link-mobile"
													activeClass="active"
													to="motos"
													spy={true}
													smooth={true}
													hashSpy={true}
													offset={-40}
													duration={1500}
													delay={100}
													isDynamic={true}
													ignoreCancelEvents={false}
													onClick={showSideBar}
												>
													Motos
												</LinkScroll>
												<LinkScroll
													className="link-mobile"
													activeClass="active"
													to="leilao"
													spy={true}
													smooth={true}
													hashSpy={true}
													offset={-40}
													duration={1500}
													delay={100}
													isDynamic={true}
													ignoreCancelEvents={false}
													onClick={showSideBar}
												>
													Leilão
												</LinkScroll>
											</>
										) : (
											<>
												<ButtonAnimation
													className="link-mobile"
													onClick={() =>
														handleButtonClick(
															"carros"
														)
													}
												>
													Carros
												</ButtonAnimation>
												<ButtonAnimation
													className="link-mobile"
													onClick={() =>
														handleButtonClick(
															"motos"
														)
													}
												>
													Motos
												</ButtonAnimation>
												<ButtonAnimation
													className="link-mobile"
													onClick={() =>
														handleButtonClick(
															"leilao"
														)
													}
												>
													Leilão
												</ButtonAnimation>
											</>
										)}
									</DivBar>
									<Divider />
									<DivBar>
										<Settings>
											<ContainerUser>
												<UserImg
													colorRandom={avatarColor}
												>
													{image
														? image
														: twoLetters()}
												</UserImg>
												<FontUserName
													auction={auction}
													colorFont={colorFont}
												>
													{name}
												</FontUserName>
											</ContainerUser>
										</Settings>
										{!advertiser ? (
											<>
												<Text
													onClick={() => {
														handleClickdropDownProfile();
														setModalEditUser(true);
													}}
												>
													Editar Perfil
												</Text>
												<Text>Editar Endereço</Text>
												<Text onClick={logout}>
													Sair
												</Text>
											</>
										) : (
											<>
												<Text
													onClick={() => {
														handleClickdropDownProfile();
														setModalEditUser(true);
													}}
												>
													Editar Perfil
												</Text>
												<Text>Editar Endereço</Text>
												<Text
													onClick={handleClickProfile}
												>
													Meus Anúncios
												</Text>
												<Text onClick={logout}>
													Sair
												</Text>
											</>
										)}
									</DivBar>
								</Menu>
							</Sidebar>
						)}
					</DivProfile>
				</Nav>
			</StyledHeader>
			{modalEditUser && <ModalEditUser />}
			{openModalUpdateAddresUser && <ModalEditAddressUser />}
			{openModalDeleteUser && <ModalDeleteUser />}
		</>
	);
};

export default Header;
