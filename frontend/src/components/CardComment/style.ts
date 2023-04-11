import styled from "styled-components";
import { FontIntegerNormal } from "../../style/fonts";

export const ContainerDetailAndCreation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1875rem;
`;

export const CreationTime = styled(FontIntegerNormal)`
  margin-top: 0.0625rem;
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--grey3);
`;

export const Div = styled.div`
  display: flex;
  gap:0.625rem;
`;

export const ContainerCardComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputDescripition = styled.input`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

