import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { TextAreaProps } from "../../interfaces/TextAreaProps/TextAreaProps";
import { CustomLabel, ErrorSpan } from "../Input/style";
import { CustomTextArea } from "./style";

const InputTextArea = React.forwardRef(
	(
		{
			label,
			name,
			width,
			error,
			offFocus,
			offBorder,
			register,
			...rest
		}: TextAreaProps,
		ref
	) => {
		return (
			<CustomLabel style={{ width: width }}>
				{label}
				<CustomTextArea
					{...rest}
					offFocus={offFocus}
					offBorder={offBorder}
					{...register!(name)}
				/>
				{error && (
					<ErrorSpan>
						{error?.message && <FiAlertCircle />}
						{error?.message && error.message}
					</ErrorSpan>
				)}
			</CustomLabel>
		);
	}
);

export default InputTextArea;
