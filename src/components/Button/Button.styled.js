import styled, { css } from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 3px;
  height: 2.5rem;
  width: 6.5rem;

  ${({ variant }) =>
    variant === "floating" &&
    css`
      position: fixed;
      right: 1.7rem;
      top: 15rem;
      background-color: #3d3d3d;
      border-radius: 50%;
      height: 3rem;
      width: 3rem;
      box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px,
        rgb(0 0 0 / 12%) 0px 1px 18px 0px; ;
    `}

  ${({ variant }) =>
    variant === "close" &&
    css`
      position: absolute;
      top: 10px;
      right: 5px;
      background-color: transparent;
      width: auto;
    `}

    ${({ variant }) =>
    variant === "icon" &&
    css`
      border: none;
      background-color: transparent;
      width: 28px;
      height: 28px;
    `}
`;

export { ButtonStyled };
