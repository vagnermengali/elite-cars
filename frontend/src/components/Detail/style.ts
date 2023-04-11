import styled from "styled-components";
import { FontIntegerNormal } from "../../style/fonts";

interface props {
  colorRandom?: string;
  auction?: boolean;
  colorFont?: string;
}

export const FontTwoLatters = styled(FontIntegerNormal)`
  color: var(--whiteFixed);
`;
export const FontUserName = styled(FontIntegerNormal)<props>`
  ${(props) => props.auction && `color: var(--whiteFixed);`}
  ${(props) => `color: var(${props.colorFont})`};
`;

export const ContainerUser = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const UserImg = styled.div<props>`
  background-color: ${(props) => `var(${props.colorRandom})`};
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
