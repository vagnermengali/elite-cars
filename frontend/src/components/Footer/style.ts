import styled from "styled-components";

export const StyledFooter = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.875rem;
	width: 100%;
	font-family: "Inter", sans-serif;
	background-color: var(--grey0);
	height: 6.25rem;
	color: var(--whiteFixed);
	@media (max-width: 600px) {
		flex-direction: column;
		height: 15.625rem;
	}
`;
export const Image = styled.img`
	width: 9.5638rem;
	height: 1.6462rem;
`;
export const Text = styled.p`
	font-weight: 400;
	font-size: .875rem;
	line-height: 1.5rem;
	color: var(--whiteFixed);
	@media (max-width: 600px) {
		font-size: .8rem;
	}
`;
export const Button = styled.button`
	width: 3.3125rem;
	height: 3.125rem;
	font-weight: 900;
	font-size: 1rem;
	line-height: 1.125rem;
	border-radius: .25rem;
	color: var(--whiteFixed);
	background: var(--grey1);
	border: none;
	outline: none;
`;
