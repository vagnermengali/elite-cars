import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { MotorShopContext } from "../../context";
import { IFormUpdateAdGallery } from "../../interfaces/FormUpdateAd/FormUpdateAd";
import { schemaUpdateAd } from "../../validations/FormUpdateAds";
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";
import Modal from "../modal";
import { Div } from "./style";

const ModalAdUpdate = () => {
	document.body.style.overflow = "hidden";
	const { ad, setOpenModaAddImage, updateAd, getAdbyId, updateGallery } = useContext(MotorShopContext);

	const { gallery } = ad;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormUpdateAdGallery>({
		resolver: yupResolver(schemaUpdateAd),
	});

	const inputs = [];

	const imageUrls = [
		gallery.urlImage1,
		gallery.urlImage2,
		gallery.urlImage3,
		gallery.urlImage4,
		gallery.urlImage5,
		gallery.urlImage6
	];
	const emptyUrls = imageUrls.filter(url => url === "");

	for (let i = 1; i <= emptyUrls.length; i++) {
		const count = Math.abs(emptyUrls.length - 6)

		if (imageUrls.filter(url => url === "")) {
			inputs.push(
				<Input
					key={`gallery-input-${i + count}`}
					name={`urlImage${i + count}`}
					label={`${i + count}° Imagem da galeria`}
					type={"url"}
					defaultValue={
						i + count === 1
							? gallery.urlImage1
							: i + count === 2
								? gallery.urlImage2
								: i + count === 3
									? gallery.urlImage3
									: i + count === 4
										? gallery.urlImage4
										: i + count === 5
											? gallery.urlImage5
											: i + count === 6
												? gallery.urlImage6
												: ''
					}
					placeholder={"Inserir URL da imagem"}
					register={register}
				/>
			);
		} else {
			null
		}
	};

	const handleUpdateAd = (data: IFormUpdateAdGallery) => {
		updateGallery(data)
		getAdbyId(ad.id);
	}

	return (
		<Modal title={"Criar anuncio"}>
			<Form onSubmit={handleSubmit(handleUpdateAd)}>
				{inputs}
				<Input
					name={"galleryId"}
					type={"text"}
					register={register}
					value={gallery.id}
					defaultValue={gallery.id}
					hidden
				/>
				<Div>
					<Button
						type="button"
						color={"grey2"}
						bgcolor={"grey6"}
						component={"big"}
						width={"7.875rem"}
						hover={{ bgcolor: "grey5" }}
						onClick={() => setOpenModaAddImage(false)}
					>
						Cancelar
					</Button>
					<Button
						type="submit"
						color={"whiteFixed"}
						bgcolor={"brand1"}
						component={"big"}
						width={"12.0625rem"}
						hover={{ bgcolor: "brand2" }}
					>
						Salvar alterações
					</Button>
				</Div>
			</Form>
		</Modal>
	);
};
export default ModalAdUpdate;
