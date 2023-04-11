import { useContext } from "react";
import { MotorShopContext } from "../../context";
import { IGallery } from "../../interfaces/IGallery/IGallery";
import { BsFillPlusCircleFill } from "react-icons/bs";
import {
	CustomerPhotoList,
	ContainerPhoto,
	Photo,
	ContainerPhotoList,
	TextPhoto,
} from "./style";

const PhotoList = ({
	urlImage1,
	urlImage2,
	urlImage3,
	urlImage4,
	urlImage5,
	urlImage6,
}: IGallery) => {
	const {
		setOpenModalImage1,
		setOpenModalImage2,
		setOpenModalImage3,
		setOpenModalImage4,
		setOpenModalImage5,
		setOpenModalImage6,
		setOpenModaAddImage,
		isLoggedIn,
		ad,
		user,
	} = useContext(MotorShopContext);

	const imageCount = [
		urlImage1,
		urlImage2,
		urlImage3,
		urlImage4,
		urlImage5,
		urlImage6,
	].filter(Boolean).length;

	return (
		<ContainerPhotoList>
			<TextPhoto>Fotos</TextPhoto>
			<CustomerPhotoList>
				{urlImage1 && (
					<ContainerPhoto onClick={() => setOpenModalImage1(true)}>
						<Photo src={urlImage1} alt="" />
					</ContainerPhoto>
				)}
				{urlImage2 && (
					<ContainerPhoto onClick={() => setOpenModalImage2(true)}>
						<Photo src={urlImage2} alt="" />
					</ContainerPhoto>
				)}
				{urlImage3 && (
					<ContainerPhoto onClick={() => setOpenModalImage3(true)}>
						<Photo src={urlImage3} alt="" />
					</ContainerPhoto>
				)}
				{urlImage4 && (
					<ContainerPhoto onClick={() => setOpenModalImage4(true)}>
						<Photo src={urlImage4} alt="" />
					</ContainerPhoto>
				)}
				{urlImage5 && (
					<ContainerPhoto onClick={() => setOpenModalImage5(true)}>
						<Photo src={urlImage5} alt="" />
					</ContainerPhoto>
				)}
				{urlImage6 && (
					<ContainerPhoto onClick={() => setOpenModalImage6(true)}>
						<Photo src={urlImage6} alt="" />
					</ContainerPhoto>
				)}
				{imageCount < 6 && isLoggedIn && user.id === ad.user.id ? (
					<ContainerPhoto onClick={() => setOpenModaAddImage(true)}>
						<BsFillPlusCircleFill className="icon" />
					</ContainerPhoto>
				) : null}
				{!imageCount && user.id !== ad.user.id && (
					<p style={{ position: "absolute" }}>
						Não há mais imagens cadastradas
					</p>
				)}
			</CustomerPhotoList>
		</ContainerPhotoList>
	);
};

export default PhotoList;
