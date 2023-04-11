import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 25rem;
  padding: 2rem;
  background-color: var(--grey10);
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.div`
  color: var(--grey1);
  font-weight: 500;
  font-size: 1.25rem;

  > p {
    color: var(--grey2);
    font-weight: 400;
    font-size: 0.875rem;
    text-align: center;
    padding: 1rem 0;
  }
`;

export const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
