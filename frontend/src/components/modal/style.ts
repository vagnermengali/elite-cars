import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	padding-top: 3rem;
	background: rgba(0, 0, 0, 0.5);
	z-index: 999;
	position: fixed;
	top: 0;
`;

export const Card = styled.div`
	width: 92%;
	max-width: 32.5rem;
	height: fit-content;
	max-height: 90vh;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	gap: 1rem;
	background-color: var(--whiteFixed);
	border-radius: 0.5rem;
`;

export const Title = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: var(--grey1);

	> svg {
		cursor: pointer;
		color: var(--grey4);
	}
`;

export const Content = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: auto;
	::-webkit-scrollbar {
		width: 0.625rem;
	}
	::-webkit-scrollbar-track {
		background: var(--whiteFixed);
	}
	::-webkit-scrollbar-thumb {
		background-color: var(--grey5);
		border-radius: 0.3125rem;
		border: 0.1875rem solid var(--whiteFixed);
	}
`;

export const Children = styled.div`
	max-width: 100%;
	max-height: 100%;

	> img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		border-radius: 0.5rem;
	}
`;
