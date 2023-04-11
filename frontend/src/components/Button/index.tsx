import { ButtonProps } from "../../interfaces/ButtonProps/ButtonProps";
import { CustomButton } from "./style";

const Button = ({
	color,
	bgcolor,
	component,
	border,
	width,
	hover,
	children,
	...rest
}: ButtonProps) => {
	return (
		<CustomButton
			color={color}
			bgcolor={bgcolor}
			component={component}
			border={border}
			width={width}
			hover={hover}
			{...rest}
		>
			{children}
		</CustomButton>
	);
};

export default Button;
