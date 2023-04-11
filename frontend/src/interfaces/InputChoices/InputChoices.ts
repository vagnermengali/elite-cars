import { FieldError, UseFormRegister } from "react-hook-form";

export interface InputChoicesProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	name: string;
	choice1: string;
	choice2: string;
	isActive?: boolean;
	register: UseFormRegister<any>;
	error?: FieldError | undefined;
	setSelectedValue: React.Dispatch<React.SetStateAction<string | void>>;
}
