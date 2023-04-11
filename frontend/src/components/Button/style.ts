import styled from "styled-components";
import { ButtonProps } from "../../interfaces/ButtonProps/ButtonProps";

export const CustomButton = styled.button<ButtonProps>`
  width: ${({ width }) => (width === "fullWidth" ? "100%" : width)};
  color: ${({ color }) => (color ? `var(--${color})` : null)};
  background-color: ${({ bgcolor }) => (bgcolor ? `var(--${bgcolor})` : null)};
  height: ${({ component }) =>
    component === "big" ? "3rem" : component === "medium" ? "2.5rem" : null};
  font-family: "Inter", sans-serif;
  font-size: ${({ component }) =>
    component === "big" ? "1rem" : component === "medium" ? "0.875rem" : null};
  font-weight: 600;
  border: ${({ border }) =>
    border ? `0.0938rem solid var(--${border})` : "none"};
    transition: all .3s ease;

  :hover:not([disabled]) {
    background-color: ${({ hover }) =>
    hover?.bgcolor ? `var(--${hover.bgcolor})` : null};
    color: ${({ hover }) => (hover?.color ? `var(--${hover.color})` : null)};
    border: ${({ hover }) =>
    hover?.border ? `0.0938rem solid var(--${hover.border})` : null};
  }

  :disabled {
    opacity: 0.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
