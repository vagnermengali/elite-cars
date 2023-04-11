import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import Input from "../Input";
import InputTextArea from "../InputTextArea";
import Modal from "../modal";
import { Text, Div, Grid, GridFullWidth } from "./style";
import { schemaCreateAd } from "../../validations/FormCreateAd";
import { IFormCreateAd } from "../../interfaces/FormCreateAd/FromCreateAd";
import Form from "../Form";
import { MotorShopContext } from "../../context";
import InputChoices from "../InputChoices";

interface AdditionalInputsProps {
	count: number;
}

const ModalAdCreate = () => {
	const [numInputs, setNumInputs] = useState(1);
	document.body.style.overflow = "hidden";
	const { handleCloseModal, registerAd } = useContext(MotorShopContext);
	const [selectedValueTypeAd, setSelectedValueTypeAd] = useState<
		string | void
	>("Venda");
	const [selectedValueTypeVec, setSelectedValueTypeVec] = useState<
		string | void
	>("Carro");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormCreateAd>({
		resolver: yupResolver(schemaCreateAd),
	});

	const newRegisterAd = (data: any) => {
		const newData = {
			...data,
			typeAd: selectedValueTypeAd,
			typeVehicle: selectedValueTypeVec,
		};
		registerAd(newData);
	};

	const addInput = () => {
		if (numInputs < 6) {
			setNumInputs(numInputs + 1);
		}
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
					placeholder={"Inserir URL da imagem"}
					register={register}
				/>
			);
		}

		return <div>{inputs}</div>;
	};
	return (
		<Modal title={"Criar anuncio"}>
			<Form onSubmit={handleSubmit(newRegisterAd)}>
				<InputChoices
					label="Tipo de anúncio"
					name="typeAd"
					choice1="Venda"
					choice2="Leilão"
					register={register}
					value={`${selectedValueTypeAd}`}
					setSelectedValue={setSelectedValueTypeAd}
					error={errors.typeAd}
				/>

				<Text>Infomações do veículo</Text>
				<Input
					name={"title"}
					label={"Título"}
					type={"text"}
					placeholder={"Digitar título"}
					error={errors.title}
					register={register}
				/>
				<Grid>
					<Input
						name={"year"}
						label={"Ano"}
						type={"number"}
						placeholder={"Digitar ano"}
						error={errors.year}
						register={register}
					/>
					<Input
						name={"mileage"}
						label={"Quilometragem"}
						type={"number"}
						placeholder={"0"}
						error={errors.mileage}
						register={register}
					/>

					<GridFullWidth>
						<Input
							name={"price"}
							label={"Preço"}
							type={"text"}
							placeholder={"Digitar preço"}
							error={errors.price}
							register={register}
						/>
					</GridFullWidth>
				</Grid>
				<InputTextArea
					name={"description"}
					label={"Descrição"}
					placeholder={"Digitar descrição"}
					error={errors.description}
					register={register}
				/>
				<InputChoices
					label="Tipo de veículo"
					name="typeVehicle"
					choice1="Carro"
					choice2="Moto"
					value={`${selectedValueTypeVec}`}
					setSelectedValue={setSelectedValueTypeVec}
					register={register}
					error={errors.typeVehicle}
				/>
				<Input
					name={"urlCoverImage"}
					label={"Imagem da capa"}
					type={"url"}
					placeholder={"Inserir URL da imagem"}
					error={errors.urlCoverImage}
					register={register}
				/>
				<Input
					key={"gallery-input-1"}
					name={"urlImage1"}
					label={"1° Imagem da galeria"}
					type={"url"}
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
						onClick={handleCloseModal}
						type="button"
						color={"grey2"}
						bgcolor={"grey6"}
						component={"big"}
						width={"7.875rem"}
						hover={{ bgcolor: "grey5" }}
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
						Criar anúncio
					</Button>
				</Div>
			</Form>
		</Modal>
	);
};

export default ModalAdCreate;
