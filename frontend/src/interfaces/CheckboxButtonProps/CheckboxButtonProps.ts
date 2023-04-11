import { FieldError, UseFormRegister } from "react-hook-form";

export interface CheckboxButtonProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	name1?: string;
	name2?: string;
	checked?: boolean;
	register?: UseFormRegister<any>;
	error?: FieldError | undefined;
}
