import styled from "styled-components";

export const Text = styled.div`
    font-weight: 500;
    font-size: .875rem;
    line-height: 1.5rem;
    color: var(--grey0);
    padding-bottom: 0.625rem;
`;

export const Div = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: .625rem;
    padding: 0.5rem 0 0.5rem 0;
`;

export const Grid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: .6875rem;

@media (max-width: 600px) {
  grid-template-columns: 1fr 1fr;

}
`;

export const GridFullWidth = styled.div`
  grid-column: unset;

@media (max-width: 600px) {
  grid-column: 1 / span 2;
}
`;

