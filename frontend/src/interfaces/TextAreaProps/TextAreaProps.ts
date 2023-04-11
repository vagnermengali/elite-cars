import { FieldError, UseFormRegister } from "react-hook-form";

export interface TextAreaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	name: string;
	width?: string;
	offBorder?: boolean;
	offFocus?: boolean;
	register?: UseFormRegister<any>;
	error?: FieldError | undefined;
}
