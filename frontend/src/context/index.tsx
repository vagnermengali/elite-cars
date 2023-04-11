import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IFormCreateAd } from "../interfaces/FormCreateAd/FromCreateAd";
import {
	IFormUpdateAd,
	IFormUpdateAdGallery,
} from "../interfaces/FormUpdateAd/FormUpdateAd";
import { FormUpdateAddressUser } from "../interfaces/FormUpdateAddressUser/FormUpdateAddressUser";
import { FormUpdateUser } from "../interfaces/FormUpdateUser/FormUpdateUser";
import { IAds } from "../interfaces/IAds/IAds";
import { IError } from "../interfaces/IError/IError";
import { ILogin } from "../interfaces/ILogin/ILogin";
import { IMotorShopContext } from "../interfaces/IMotorShopContext/IMotorShopContext";
import { IProvider } from "../interfaces/IProvider/IProvider";
import { IRegisterUser } from "../interfaces/IRegisterUser/IRegisterUser";
import { IUser } from "../interfaces/IUser/IUser";
import api from "../services";
import { toast } from "react-toastify";
import { FormCreateComment } from "../interfaces/FormCreateComment/FormCreateComment";
import { FormUpdateComment } from "../interfaces/FormUpdateComment/FormUpdateComment";
import {
	IRedefinePassword,
	ISendEmailForgotPassword,
} from "../interfaces/IFormForgotPassword/IFormForgotPassword";

export const MotorShopContext = createContext<IMotorShopContext>(
	{} as IMotorShopContext
);

const MotorShopProvider = ({ children }: IProvider) => {
	const [user, setUser] = useState<IUser>({} as IUser);
	const [userProfile, setUserProfile] = useState<IUser>({} as IUser);
	const [randomAds, setRandomAds] = useState<IAds[]>([]);
	const [ad, setAd] = useState<IAds>({} as IAds);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [openModalCreateAd, setOpenModalCreateAd] = useState(false);
	const [openModalUpdateAd, setOpenModalUpdateAd] = useState(false);
	const [openModalDeleteAd, setOpenModalDeleteAd] = useState(false);
	const [modalEditUser, setModalEditUser] = useState<boolean>(false);
	const [openModalUpdateAddresUser, setOpenModalUpdateAddresUser] =
		useState(false);
	const [openModalRegisterUserSuccess, setOpenModalRegisterUserSuccess] =
		useState(false);
	const [openModalDeleteUser, setOpenModalDeleteUser] = useState(false);
	const [openModalReturnCreateAd, setOpenModalReturnCreateAd] =
		useState(false);
	const [openModalReturnUpdateAd, setOpenModalReturnUpdateAd] =
		useState(false);
	const [openModalReturnDeleteAd, setOpenModalReturnDeleteAd] =
		useState(false);
	const [openModalImage1, setOpenModalImage1] = useState(false);
	const [openModalImage2, setOpenModalImage2] = useState(false);
	const [openModalImage3, setOpenModalImage3] = useState(false);
	const [openModalImage4, setOpenModalImage4] = useState(false);
	const [openModalImage5, setOpenModalImage5] = useState(false);
	const [openModalImage6, setOpenModalImage6] = useState(false);
	const [token, setToken] = useState(
		localStorage.getItem("@motors-shop:token") || ""
	);
	const [prevLocation, setPrevLocation] = useState<string>("");
	const [openModaAddImage, setOpenModaAddImage] = useState(false);

	const [cep, setCep] = useState("");

	const navigate = useNavigate();
	const notifySuccess = (text: string, idNotify: string) =>
		toast.success(text, { toastId: idNotify });
	const notifyError = (text: string, idNotify: string) =>
		toast.error(text, { toastId: idNotify });
	const notifyWarn = (text: string, idNotify: string) =>
		toast.warn(text, { toastId: idNotify });

	useEffect(() => {
		const loadUser = async () => {
			if (token !== "") {
				try {
					api.defaults.headers.Authorization = `Bearer ${token}`;
					const res = await api.get("/users/profile");
					setUser(res.data);
					setIsLoggedIn(true);
				} catch (error) {
					console.error(error);
					localStorage.removeItem("@motors-shop:token");
				}
			}
		};
		loadUser();
	}, [token]);

	const signIn = async (data: ILogin) => {
		try {
			const { email, password } = data;
			const res = await api.post("/login", { email, password });
			localStorage.setItem("@motors-shop:token", res.data.token);
			setToken(res.data.token);
			setTimeout(() => {
				if (prevLocation) {
					navigate(prevLocation);
				} else if (token.length > 1 && !prevLocation) {
					navigate("/homepage");
				}
			}, 1000);
			notifySuccess("Login efetuado com sucesso!", "successLogin");
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
			if (err.response?.data.message === "Invalid e-mail or password") {
				return notifyError("Email ou senha inválidos!", "errorEmail");
			}
			notifyError("Algo deu errado! Tente Novamente!", "errorLogin");
		}
	};

	const logout = () => {
		localStorage.removeItem("@motors-shop:token");
		navigate("/homepage");
		setIsLoggedIn(false);
		setUser({} as IUser);
	};

	const registerUser = async (data: IRegisterUser) => {
		try {
			await api.post("/users", data);
			setOpenModalRegisterUserSuccess(true);
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
			notifyError(
				"Algo deu errado! Tente novamente!",
				"errorRegisterUser"
			);
		}
	};

	const sendEmailRedefinePassword = async (
		data: ISendEmailForgotPassword
	) => {
		const { email } = data;

		try {
			await api.post("/users/redefine-password", { email });
			toast.success("Verifique sua caixa de entrada no email!");
			navigate("/homepage", { replace: true });
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
			toast.error("Algo deu errado! Tente novamente!");
		}
	};

	const redefinePassword = async (data: IRedefinePassword) => {
		const { userId } = data;

		try {
			await api.patch<IUser>(`/users/redefine-password/${userId}`, data);
			toast.success("Senha atualizada com sucesso!");
			navigate("/login", { replace: true });
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);

			if (err.response?.data.message === "Invalid code!") {
				toast.error("Código inválido!");
			} else {
				toast.error("Algo deu errado! Tente novamente!");
			}
		}
	};

	const handleCloseModal = () => {
		setOpenModalCreateAd(false);
		setOpenModalDeleteAd(false);
		setOpenModalUpdateAd(false);
		setModalEditUser(false);
		setOpenModalRegisterUserSuccess(false);
		setOpenModalUpdateAddresUser(false);
		setOpenModalDeleteUser(false);
		setOpenModalReturnCreateAd(false);
		setOpenModalReturnUpdateAd(false);
		setOpenModalReturnDeleteAd(false);
		setOpenModalImage1(false);
		setOpenModalImage2(false);
		setOpenModalImage3(false);
		setOpenModalImage4(false);
		setOpenModalImage5(false);
		setOpenModalImage6(false);
		setOpenModaAddImage(false);
	};

	const getUserByProfile = async () => {
		try {
			const res = await api.get<IUser>("/users/profile");
			setUserProfile(res.data);
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const getUserById = async (userId: string) => {
		try {
			const res = await api.get<IUser>(`/users/${userId}`);
			setUserProfile(res.data);
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const updateUser = async (data: FormUpdateUser) => {
		try {
			const res = await api.patch<IUser>(`/users/${user.id}`, data);
			setUser(res.data);
			handleCloseModal();
			notifySuccess("Perfil alterado com sucesso!", "sucessUpdateUser");
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
			notifyError("Algo deu errado! Tente novamente!", "errorUpdateUser");
		}
	};

	const deleteUser = async (userId: string) => {
		try {
			await api.delete(`/users/${userId}`);
			localStorage.clear();
			setIsLoggedIn(false);
			getRandomAds();
			notifySuccess("Perfil excluído com sucesso!", "sucessDeleteUser");
			navigate("/homepage");
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
			notifyError("Algo deu errado! Tente novamente!", "errorDeleteUser");
		}
	};

	const desactiveUser = async (userId: string) => {
		try {
			await api.delete(`/users/desactive/${userId}`);
			localStorage.clear();
			setIsLoggedIn(false);
			getRandomAds();
			notifySuccess(
				"Perfil desativado com sucesso!",
				"sucessDesactiveUser"
			);
			navigate("/homepage");
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
			if (err.response?.data.message === "User is not active") {
				notifyError(
					"Perfil do usuário desativado!",
					"errorDesactiveUser"
				);
			} else {
				notifyError(
					"Algo deu errado! Tente novamente!",
					"errorDesactiveUser"
				);
			}
		}
	};

	const updateAddressUser = async (
		data: FormUpdateAddressUser,
		addressId: string
	) => {
		try {
			await api.patch(`/address/${addressId}`, data);
			handleCloseModal();
			const res = await api.get(`/users/${user.id}`);
			setUser(res.data);
			notifySuccess(
				"Endereço atualizado com successo!",
				"sucessUpdateAddressUser"
			);
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
			notifyError(
				"Algo deu errado! Tente novamente!",
				"errorUpdateAddressUser"
			);
		}
	};

	const getAdbyId = async (idAd: string) => {
		try {
			const res = await api.get<IAds>(`/ads/${idAd}`);
			setAd(res.data);
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const getAdbyIdNotOwner = async (idAd: string) => {
		try {
			const res = await api.get<IAds>(`/ads/${idAd}`);
			setAd(res.data);
			setUserProfile(res.data.user);
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const getRandomAds = async () => {
		try {
			const res = await api.get<IAds[]>("/ads/random");
			setRandomAds(res.data);
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const registerAd = async (data: IFormCreateAd) => {
		try {
			await api.post<IFormCreateAd>("/ads", data);
			getUserByProfile();
			handleCloseModal();
			setOpenModalReturnCreateAd(true);
			setTimeout(() => {
				handleCloseModal();
			}, 3000);
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
			notifyError("Algo deu errado! Tente novamente!", "errorRegisterAd");
		}
	};

	const updateAd = async (data: IFormUpdateAd, adId: string) => {
		const galleryData = data;
		console.log(data);
		try {
			await api.patch<IFormUpdateAd>(`/ads/${adId}`, data);
			await api.patch(`/galleries/${galleryData.galleryId}`, galleryData);
			getUserByProfile();
			handleCloseModal();
			setOpenModalReturnUpdateAd(true);
			setTimeout(() => {
				handleCloseModal();
			}, 3000);
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const deleteAd = async (adId: string) => {
		try {
			await api.delete(`/ads/${adId}`);
			getUserByProfile();
			setOpenModalReturnDeleteAd(true);
			setTimeout(() => {
				handleCloseModal();
			}, 3000);
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const createComment = async (data: FormCreateComment) => {
		try {
			await api.post("/comment", data);
			notifySuccess("Comentário postado!", "sucessCreateComment");
			getAdbyId(ad.id);
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
			notifyError(
				"Algo deu errado! Tente novamente!",
				"errorCreateComment"
			);
		}
	};

	const updateComment = async (data: FormUpdateComment, id: string) => {
		try {
			await api.patch(`/comment/${id}`, data);
			getAdbyId(ad.id);
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const deleteComment = async (id: string) => {
		try {
			await api.delete(`/comment/${id}`);
			getAdbyId(ad.id);
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const updateGallery = async (data: IFormUpdateAdGallery) => {
		try {
			await api.patch(`/galleries/${data.galleryId}`, data);
			getAdbyId(ad.id);
			handleCloseModal();
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	return (
		<MotorShopContext.Provider
			value={{
				user,
				setUser,
				userProfile,
				setUserProfile,
				getUserByProfile,
				getUserById,
				randomAds,
				setRandomAds,
				ad,
				setAd,
				getAdbyId,
				updateAd,
				isLoggedIn,
				setIsLoggedIn,
				openModalCreateAd,
				setOpenModalCreateAd,
				openModalUpdateAd,
				setOpenModalUpdateAd,
				openModalDeleteAd,
				setOpenModalDeleteAd,
				openModalRegisterUserSuccess,
				setOpenModalRegisterUserSuccess,
				openModalUpdateAddresUser,
				setOpenModalUpdateAddresUser,
				openModalDeleteUser,
				setOpenModalDeleteUser,
				openModalReturnCreateAd,
				setOpenModalReturnCreateAd,
				openModalReturnUpdateAd,
				setOpenModalReturnUpdateAd,
				openModalReturnDeleteAd,
				setOpenModalReturnDeleteAd,
				openModalImage1,
				openModalImage2,
				openModalImage3,
				openModalImage4,
				openModalImage5,
				openModalImage6,
				setOpenModalImage1,
				setOpenModalImage2,
				setOpenModalImage3,
				setOpenModalImage4,
				setOpenModalImage5,
				setOpenModalImage6,
				handleCloseModal,
				registerAd,
				getRandomAds,
				deleteAd,
				signIn,
				token,
				getAdbyIdNotOwner,
				modalEditUser,
				setModalEditUser,
				updateUser,
				logout,
				registerUser,
				updateAddressUser,
				createComment,
				deleteUser,
				prevLocation,
				setPrevLocation,
				deleteComment,
				updateComment,
				sendEmailRedefinePassword,
				redefinePassword,
				desactiveUser,
				openModaAddImage,
				setOpenModaAddImage,
				updateGallery,
				cep,
				setCep,
			}}
		>
			{children}
		</MotorShopContext.Provider>
	);
};

export default MotorShopProvider;
