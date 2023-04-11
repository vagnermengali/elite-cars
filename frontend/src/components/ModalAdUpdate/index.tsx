import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { MotorShopContext } from "../../context";
import { IFormUpdateAd } from "../../interfaces/FormUpdateAd/FormUpdateAd";
import { schemaUpdateAd } from "../../validations/FormUpdateAds";
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";
import InputChoices from "../InputChoices";
import InputTextArea from "../InputTextArea";
import Modal from "../modal";
import { Div, Grid, GridFullWidth } from "../ModalAdCreate/style";
import { Text } from "./style";

interface AdditionalInputsProps {
	count: number;
}

const ModalAdUpdate = () => {
	const [numInputs, setNumInputs] = useState(1);
	document.body.style.overflow = "hidden";
	const { handleCloseModal, setOpenModalDeleteAd, ad, updateAd } =
		useContext(MotorShopContext);

	const {
		typeAd,
		typeVehicle,
		description,
		isActive,
		mileage,
		price,
		title,
		urlCoverImage,
		year,
		gallery,
	} = ad;
	const [selectedValueTypeAd, setSelectedValueTypeAd] = useState<
		string | void
	>(typeAd);
	const [selectedValueTypeVec, setSelectedValueTypeVec] = useState<
		string | void
	>(typeVehicle);
	const [selectedValueAdPublic, setSelectedValueAdPublic] = useState<
		string | void
	>(isActive ? "Sim" : "Não");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormUpdateAd>({
		resolver: yupResolver(schemaUpdateAd),
	});

	const newUpdateAd = (data: IFormUpdateAd) => {
		const newData = {
			...data,
			typeAd: selectedValueTypeAd,
			typeVehicle: selectedValueTypeVec,
			isActive: selectedValueAdPublic === "Sim" ? true : false,
			galleryId: gallery.id,
		};
		updateAd(newData, ad.id);
	};

	const addInput = () => {
		if (numInputs < 6) {
			setNumInputs(numInputs + 1);
		}
	};

	const handleClickDelete = () => {
		handleCloseModal();
		setOpenModalDeleteAd(true);
	};

	const AdditionalInputs = ({ count }: AdditionalInputsProps) => {
		const inputs = [];

		for (let i = 2; i <= count; i++) {
			inputs.push(
				<Input
					key={`gallery-input-${i}`}
					name={`urlImage${i}`}
					label={`${i}° Imagem da galeria`}
					type={"url"}
					defaultValue={
						i === 2
							? gallery.urlImage2
							: i === 3
							? gallery.urlImage3
							: i === 4
							? gallery.urlImage4
							: i === 5
							? gallery.urlImage5
							: i === 6
							? gallery.urlImage6
							: ""
					}
					placeholder={"Inserir URL da imagem"}
					register={register}
				/>
			);
		}

		return <div>{inputs}</div>;
	};
	return (
		<Modal title={"Criar anuncio"}>
			<Form onSubmit={handleSubmit(newUpdateAd)}>
				<InputChoices
					label="Tipo de anúncio"
					name="typeAd"
					choice1="Venda"
					choice2="Leilão"
					register={register}
					defaultValue={typeAd}
					value={`${selectedValueTypeAd}`}
					setSelectedValue={setSelectedValueTypeAd}
					error={errors.typeAd}
				/>

				<Text>Infomações do veículo</Text>
				<Input
					name={"title"}
					label={"Título"}
					type={"text"}
					defaultValue={title}
					placeholder={"Digitar título"}
					error={errors.title}
					register={register}
				/>
				<Grid>
					<Input
						name={"year"}
						label={"Ano"}
						type={"number"}
						defaultValue={`${year}`}
						placeholder={"Digitar ano"}
						error={errors.year}
						register={register}
					/>
					<Input
						name={"mileage"}
						label={"Quilometragem"}
						type={"number"}
						defaultValue={`${mileage}`}
						placeholder={"0"}
						error={errors.mileage}
						register={register}
					/>

					<GridFullWidth>
						<Input
							name={"price"}
							label={"Preço"}
							type={"text"}
							defaultValue={price}
							placeholder={"Digitar preço"}
							error={errors.price}
							register={register}
						/>
					</GridFullWidth>
				</Grid>
				<InputTextArea
					name={"description"}
					label={"Descrição"}
					defaultValue={description}
					placeholder={"Digitar descrição"}
					error={errors.description}
					register={register}
				/>
				<InputChoices
					label="Tipo de veículo"
					name="typeVehicle"
					choice1="Carro"
					choice2="Moto"
					defaultValue={typeVehicle}
					value={`${selectedValueTypeVec}`}
					setSelectedValue={setSelectedValueTypeVec}
					register={register}
					error={errors.typeVehicle}
				/>
				<InputChoices
					label="Publicado"
					name="isActive"
					choice1="Sim"
					choice2="Não"
					defaultValue={`${selectedValueAdPublic}`}
					value={`${selectedValueAdPublic}`}
					setSelectedValue={setSelectedValueAdPublic}
					register={register}
					error={errors.isActive}
				/>

				<Input
					name={"urlCoverImage"}
					label={"Imagem da capa"}
					type={"url"}
					defaultValue={urlCoverImage}
					placeholder={"Inserir URL da imagem"}
					error={errors.urlCoverImage}
					register={register}
				/>
				<Input
					key={"gallery-input-1"}
					name={"urlImage1"}
					label={"1° Imagem da galeria"}
					type={"url"}
					defaultValue={gallery.urlImage1}
					placeholder={"Inserir URL da imagem"}
					error={errors.urlImage1}
					register={register}
				/>
				<AdditionalInputs count={numInputs} />
				{numInputs < 6 && (
					<Button
						type="button"
						color={"brand1"}
						bgcolor={"brand4"}
						component={"medium"}
						width={"100%"}
						style={{ maxWidth: "19.6875rem" }}
						hover={{ bgcolor: "brand3" }}
						onClick={addInput}
					>
						Adicionar campo para imagem da galeria
					</Button>
				)}
				<Div>
					<Button
						type="button"
						color={"grey2"}
						bgcolor={"grey6"}
						component={"big"}
						width={"7.875rem"}
						hover={{ bgcolor: "grey5" }}
						onClick={handleClickDelete}
					>
						Excluir anúncio
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
