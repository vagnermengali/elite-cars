import { FieldError, UseFormRegister } from "react-hook-form";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	value?: string;
	register: UseFormRegister<any>;
	error?: FieldError | undefined;
	name: string;
}
