// Button.js
import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import arrowLeft from "./arrowLeft.png";
import arrowRight from "./arrowRight.png";

interface ButtonProps {
  onClick: () => void;
  direction: "left" | "right";
}

// Базовий стиль кнопки
const ButtonBase = styled.button`
  min-width: 40px;
  width: 40px;
  height: 32px;
  background: #0c3865;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: none;
  transition: all 0.5s ease;
  text-decoration: none;
  cursor: pointer;
  outline: none;

  &:active {
    background: linear-gradient(275.82deg, #3177be 7.7%, #011121 72.63%);
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const ButtonLeftRight: React.FC<ButtonProps> = ({ onClick, direction }) => (
  <ButtonBase onClick={onClick}>
    <img src={direction === "left" ? arrowLeft : arrowRight} alt={`arrow ${direction}`} />
  </ButtonBase>
);

export default ButtonLeftRight;
