import { FormCreateComment } from "../FormCreateComment/FormCreateComment";
import {
  IFormUpdateAd,
  IFormUpdateAdGallery,
} from "../FormUpdateAd/FormUpdateAd";
import { FormUpdateAddressUser } from "../FormUpdateAddressUser/FormUpdateAddressUser";
import { FormUpdateComment } from "../FormUpdateComment/FormUpdateComment";
import { FormUpdateUser } from "../FormUpdateUser/FormUpdateUser";
import { IAds } from "../IAds/IAds";
import {
  IRedefinePassword,
  ISendEmailForgotPassword,
} from "../IFormForgotPassword/IFormForgotPassword";
import { ILogin } from "../ILogin/ILogin";
import { IRegisterUser } from "../IRegisterUser/IRegisterUser";
import { IUser } from "../IUser/IUser";

export interface IMotorShopContext {
  notifySuccess?: (text: string, id: string) => void;
  notifyError?: (text: string, id: string) => void;
  notifyWarn?: (text: string, id: string) => void;
  user: IUser;
  setUser: (state: IUser) => void;
  userProfile: IUser;
  setUserProfile: (state: IUser) => void;
  randomAds: IAds[];
  setRandomAds: (state: IAds[]) => void;
  ad: IAds;
  setAd: (state: IAds) => void;
  getAdbyId: (adId: string) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  openModalCreateAd: boolean;
  setOpenModalCreateAd: React.Dispatch<React.SetStateAction<boolean>>;
  openModalUpdateAd: boolean;
  setOpenModalUpdateAd: React.Dispatch<React.SetStateAction<boolean>>;
  openModalDeleteAd: boolean;
  setOpenModalDeleteAd: React.Dispatch<React.SetStateAction<boolean>>;
  openModaAddImage: boolean;
  setOpenModaAddImage: React.Dispatch<React.SetStateAction<boolean>>;
  handleCloseModal: () => void;
  registerAd: (data: any) => void;
  getRandomAds: () => void;
  getUserByProfile: () => void;
  getUserById: (userId: string) => void;
  updateAd: (data: IFormUpdateAd, adId: string) => void;
  deleteAd: (adId: string) => void;
  signIn: (data: ILogin) => void;
  token: string;
  getAdbyIdNotOwner: (adId: string) => void;
  modalEditUser: boolean;
  setModalEditUser: React.Dispatch<React.SetStateAction<boolean>>;
  updateUser: (data: FormUpdateUser) => void;
  logout: () => void;
  registerUser: (data: IRegisterUser) => void;
  openModalRegisterUserSuccess: boolean;
  setOpenModalRegisterUserSuccess: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  openModalUpdateAddresUser: boolean;
  setOpenModalUpdateAddresUser: React.Dispatch<React.SetStateAction<boolean>>;
  updateAddressUser: (data: FormUpdateAddressUser, addressId: string) => void;
  createComment: (data: FormCreateComment) => void;
  openModalDeleteUser: boolean;
  setOpenModalDeleteUser: React.Dispatch<React.SetStateAction<boolean>>;
  deleteUser: (userId: string) => void;
  desactiveUser: (userId: string) => void;
  deleteComment: (id: string) => void;
  updateComment: (data: FormUpdateComment, id: string) => void;
  prevLocation: string;
  setPrevLocation: React.Dispatch<React.SetStateAction<string>>;
  sendEmailRedefinePassword: (email: ISendEmailForgotPassword) => void;
  redefinePassword: (data: IRedefinePassword) => void;
  openModalReturnCreateAd: boolean;
  setOpenModalReturnCreateAd: React.Dispatch<React.SetStateAction<boolean>>;
  openModalReturnUpdateAd: boolean;
  setOpenModalReturnUpdateAd: React.Dispatch<React.SetStateAction<boolean>>;
  openModalReturnDeleteAd: boolean;
  setOpenModalReturnDeleteAd: React.Dispatch<React.SetStateAction<boolean>>;
  openModalImage1: boolean;
  openModalImage2: boolean;
  openModalImage3: boolean;
  openModalImage4: boolean;
  openModalImage5: boolean;
  openModalImage6: boolean;
  setOpenModalImage1: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModalImage2: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModalImage3: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModalImage4: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModalImage5: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModalImage6: React.Dispatch<React.SetStateAction<boolean>>;
  updateGallery: (data: IFormUpdateAdGallery) => void;
  cep: string;
  setCep: React.Dispatch<React.SetStateAction<string>>;
}
