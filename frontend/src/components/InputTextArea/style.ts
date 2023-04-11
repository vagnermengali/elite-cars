import styled from "styled-components";
import { TextAreaProps } from "../../interfaces/TextAreaProps/TextAreaProps";

export const CustomTextArea = styled.textarea<TextAreaProps>`
	width: 100%;
	height: 5rem;
	padding: 1rem;
	margin: 0.4375rem 0;
	border: 0.125rem solid var(--grey8);
	border-radius: 0.25rem;
	font-family: "Inter", sans-serif;
	font-size: 1rem;
	outline: none;
	resize: none;

	::-webkit-scrollbar {
		display: none;
	}
	::-moz-scrollbar {
		display: none;
	}
	::-o-scrollbar {
		display: none;
	}
	::-ms-scrollbar {
		display: none;
	}

	:focus {
		border: ${({ offFocus }) =>
			offFocus ? null : "0.0938rem solid var(--brand2)"};
	}

	::placeholder {
		color: var(--grey3);
		font-size: 1rem;
		font-weight: 400;
	}

	@media screen and (min-width: 768px) {
		border: ${({ offBorder }) => offBorder && "none"};
	}
`;
