export interface ISendEmailForgotPassword {
  email: string;
}

export interface IRedefinePassword {
  password: string;
  confirmPassword: string;
  userId: string,
  newPasswordCode: string;
}
