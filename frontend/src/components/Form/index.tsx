import { ReactNode } from "react";
import { CustomForm } from "./style";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
	children: ReactNode;
}

const Form = ({ children, ...rest }: FormProps) => {
	return <CustomForm {...rest}>{children}</CustomForm>;
};

export default Form;
