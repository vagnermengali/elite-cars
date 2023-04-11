import styled, { css } from "styled-components";
import { FontIntegerNormal } from "../../style/fonts";

interface props {
	colorRandom?: string;
	auction?: boolean;
	image?: string;
	isActive?: boolean;
	advertiser?: boolean;
}

export const FontCardDescription = styled(FontIntegerNormal)<props>`
	min-height: calc(2em + 1.25rem);
	font-weight: 400;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;

	${(props) =>
		props.auction &&
		`
		min-height: calc(2em + 3.25rem);
		color: var(--grey5); 
		font-size: 1rem;
		line-height: 1.75rem;
		-webkit-line-clamp: 1;

		@media screen and (max-width: 1024px) {
			-webkit-line-clamp: 3;
		}
  `}
`;
export const FontCardTitle = styled.span<props>`
	font-weight: 600;
	font-size: 1rem;
	min-height: calc(2em + 0.625rem);

	${(props) =>
		props.auction &&
		`
    color: var(--whiteFixed); 
    font-size: 1.25rem;
    line-height: 1.5625rem;
  `}
`;
export const FontPrice = styled(FontCardTitle)`
	font-weight: 500;
`;

export const CustomLi = styled.li<props>`
	width: 100%;
	${(props) => (props.auction ? "max-width: 45.9375rem;" : "max-width: 19.5rem;")}
	min-width: 19.5rem;
	list-style: none;
	border: 0.125rem solid transparent;

	${(props) =>
		!props.auction &&
		!props.advertiser &&
		`
			:hover > div:first-child {
				border: 0.125rem solid var(--brand1);
				
				img {
					scale: 1.15;
				}

				div {
					opacity: 0;
				}
			}
		`}
	${(props) =>
		props.auction &&
		!props.advertiser &&
		`
	:hover > div:nth-child(2) {
		background-color: var(--brand2);
		
		img {
			transform: translateX(0.625rem) 
		}
	}
	`}
`;

export const ContainerInfoCard = styled.div<props>`
	transition: 0.7s;
	position: relative;
	${(props) =>
		props.auction &&
		`
		background-image: url("${props.image}");
		background-position: center;
		background-size: cover;
		`}

	cursor: ${(props) => !props.auction && "pointer"};

	::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-image: url(${(props) => props.image});
		background-position: center;
		background-size: cover;
		filter: brightness(70%);
		transition: 0.7s;
		opacity: 0;
	}

	${(props) =>
		props.auction &&
		!props.advertiser &&
		`
		:hover::before {
			opacity: 1;
		}
		`}
`;

export const InfoCard = styled(ContainerInfoCard)`
	padding: 1rem 0;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	${(props) =>
		props.auction &&
		`
    padding: 1.5rem 5%;
    color: var(--whiteFixed); 
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);

  `}
`;

export const Clock = styled.div`
	display: flex;
	align-items: center;
	max-width: 7.6875rem;
	padding: 0.375rem;
	gap: 0.625rem;
	background-color: var(--whiteFixed);
	border-radius: 2rem;
	color: black;
	margin-bottom: 1.875rem;

	@media (min-width: 400px) {
		margin-bottom: 3.375rem;
	}
`;

export const ContainerCarImg = styled.div`
	height: 9.5rem;
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: var(--grey7);
	position: relative;
	cursor: pointer;
	border: 0.125rem solid transparent;
	transition: 0.7s;
	overflow: hidden;
`;

export const CarImg = styled.img`
	object-fit: scale-down;
	transition: 0.7s;
`;

export const ContainerPriceYearKm = styled.div<props>`
	display: flex;
	justify-content: space-between;

	${(props) =>
		props.auction &&
		css`
			flex-direction: column;
			gap: 1.25rem;

			@media (min-width: 1710px) {
				flex-direction: row;
			}
		`}
`;

export const InfoKmYear = styled(FontIntegerNormal)`
	background-color: red;
	padding: 0.25rem 0.5rem;
	margin-right: 0.75rem;
	border-radius: 0.25rem;
	background: var(--brand4);
	color: var(--brand1);
`;

export const ButtonAuction = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--brand1);
	line-height: 0rem;
	color: var(--whiteFixed);
	padding: 1.5625rem 5.1%;
	border-radius: 0 0 0.375rem 0.375rem;
	transition: 0.7s;
`;
export const RightArrow = styled.img`
	width: 1.625rem;
	height: 0.875rem;
	transition: 0.7s;
`;

export const IsActiveInfo = styled.div<props>`
	top: 0.625rem;
	left: 1.5rem;
	position: absolute;
	background-color: ${(props) =>
		props.isActive ? "var(--brand1)" : "var(--grey4)"};
	color: var(--whiteFixed);
	font-weight: 500;
	font-size: 0.875rem;
	padding: 0.3125rem 0.4375rem;
	transition: 0.7s;
	z-index: 10;
`;
