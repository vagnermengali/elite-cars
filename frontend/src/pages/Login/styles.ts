import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--grey8);
`;

export const Main = styled.div`
  width: 100%;
  min-height: calc(100vh - 11.25rem);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const ContainerForm = styled.div`
  width: 100%;
  max-width: 25rem;
  padding: 2rem;
  background-color: var(--grey10);
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  form {
    a {
      text-align: end;
      font-weight: 500;
      color: var(--grey2);
      cursor: pointer;
    }
  }
`;

export const Title = styled.p`
  color: var(--grey1);
  font-weight: 500;
  font-size: 1.25rem;
`;

export const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
