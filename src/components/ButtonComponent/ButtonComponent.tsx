import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

interface ButtonProps {
  to: string;
  variant: "filled" | "outlined";
  theme: "light" | "dark";
  width?: string;
  children: React.ReactNode;
}

interface StyledButtonProps {
  variant: "filled" | "outlined";
  theme: "light" | "dark";
  width?: string;
  target?: string;
}

const defaultFilledTextColor = "rgba(252, 252, 252, 1)";
const defaultOutlinedTextColor = "rgba(12, 56, 101, 1)";
const defaultDarkFilledTextColor = "rgba(255, 255, 255, 1)";
const defaultDarkOutlinedTextColor = "rgba(255, 255, 255, 0.8)";

// Базовий стиль кнопки
const ButtonBase = styled.a<StyledButtonProps | any>`
  width: 100%;
  height: 48px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  transition: all 0.5s ease;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  padding: 12px;
  text-wrap: nowrap;

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  &:focus {
    outline: none;
    box-shadow: none;
  }

  ${(props) =>
    props.variant === "filled" &&
    props.theme === "light" &&
    css`
      border: 0px solid white;
      background: hsl(210, 79%, 22%);
      color: ${defaultFilledTextColor};

      &:hover,
      &:active,
      &:visited {
        color: ${defaultFilledTextColor};
      }

      &:active {
        border-image-source: linear-gradient(87deg, #3076be 1.5%, #011121 99.52%);
        background: linear-gradient(275.82deg, #3177be 7.7%, #011121 72.63%);
      }
    `}

  ${(props) =>
    props.variant === "outlined" &&
    props.theme === "light" &&
    css`
      border: 1px solid hsl(210, 79%, 22%);
      color: rgba(6, 28, 51, 1);

      &:hover,
      &:active,
      &:visited {
        color: black;
        border: 2px solid #244c74;
      }
    `}

  ${(props) =>
    props.variant === "filled" &&
    props.theme === "dark" &&
    css`
      border: 0px solid white;
      background: rgba(176, 200, 224, 1);
      color: rgba(6, 28, 51, 1);

      &:hover,
      &:active,
      &:visited {
        color: rgba(6, 28, 51, 1);
      }

      &:active {
        border-image-source: linear-gradient(87deg, #3076be 1.5%, #011121 99.52%);
        background: linear-gradient(275.82deg, #3177be 7.7%, #011121 72.63%);
      }
    `}

  ${(props) =>
    props.variant === "outlined" &&
    props.theme === "dark" &&
    css`
      border: 1px solid #739ec9;
      background: none;
      color: #c8d9e9;

      &:hover,
      &:active,
      &:visited {
        color: #c8d9e9;
        border: 2px solid #c8d9e9;
      }

      &:active {
        border-image-source: linear-gradient(87deg, #3076be 1.5%, #011121 99.52%);
        background: none;
        color: #c8d9e9;
      }
    `}
`;

const Button: React.FC<ButtonProps> = ({ to, children, variant, theme, width }) => (
  <ButtonBase to={to} variant={variant} theme={theme} width={width} target="_blank">
    {children}
  </ButtonBase>
);

export default Button;
