import styled from "styled-components";

export const InfoSection = styled.section`
	min-height: 36.25rem;
	background-color: var(--brand2);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ContainerInfo = styled.div`
	max-width: 46.875rem;
	padding: 0 0.75rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	gap: 3.25rem;
`;

export const TitleHome = styled.h1`
	font-size: 2rem;
	font-weight: 700;
	color: var(--grey10);
`;

export const InfoHome = styled.span`
	font-size: 1rem;
	font-weight: 400;
	color: var(--grey9);
`;

export const ContainerButtons = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1.25rem;

	@media screen and (min-width: 425px) {
		max-width: 23.75rem;
		flex-direction: row;
	}
`;
