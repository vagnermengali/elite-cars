import styled from "styled-components";

export const CustomLabel = styled.label`
	font-size: 0.875rem;
	font-weight: 500;
`;

export const CustomInput = styled.input`
	width: 100%;
	height: 3rem;
	padding: 1rem;
	margin: 0.4375rem 0;
	border: 0.125rem solid var(--grey8);
	border-radius: 0.25rem;
	font-size: 1rem;
	outline: none;

	::placeholder {
		color: var(--grey3);
		font-size: 1rem;
		font-weight: 400;
	}
	::-webkit-input-placeholder {
		color: var(--grey3);
	}
	:-ms-input-placeholder {
		color: var(--grey3);
	}

	:focus {
		border: 0.0938rem solid var(--brand2);
	}

	:invalid {
		border: 0.0938rem solid var(--alert1);
	}
`;

export const ErrorSpan = styled.span`
	height: 0.875rem;
	display: flex;
	align-items: center;
	gap: 0.3125rem;
	margin-bottom: 0.4375rem;
	font-size: 0.875rem;
	color: var(--alert1);

	> svg {
		color: var(--alert1);
	}
`;
