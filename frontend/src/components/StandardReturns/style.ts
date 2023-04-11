import styled from "styled-components";

export const Container = styled.div`
	padding: 1.5625rem 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1.25rem;
`;

export const Title = styled.h4`
	font-weight: 500;
	color: var(--grey1);
`;

export const Message = styled.p`
	font-family: "Inter", sans-serif;
	font-weight: 400;
	color: var(--grey2);
`;
