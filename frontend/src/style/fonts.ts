import styled from "styled-components";

export const FontIntegerNormal = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: var(--grey2);
`;

export const FontIntegerLight = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: var(--grey3);
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
