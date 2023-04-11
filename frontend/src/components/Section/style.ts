import styled from "styled-components";

export const CustonSection = styled.section`
	padding: 2.5rem 0.75rem 0 0.75rem;
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 1024px) {
		padding: 2.5rem 0 2.5rem 3.75rem;
	}
`;

export const TitleSection = styled.h5`
	font-size: 1.5rem;
	font-weight: 600;
	color: black;
`;
export const ListCards = styled.ul`
	.list-cards {
		display: flex;
		padding: 1rem 0;
		gap: 0.75rem;
	}

	@media screen and (min-width: 768px) {
		.list-cards {
			gap: 1.5rem;
			padding: 3rem 0;
		}
	}
`;

export const EmptyList = styled.p`
	text-align: center;
	font-size: 0.875rem;
	margin: 1.5625rem 0;
	color: var(--brand2);
`;
