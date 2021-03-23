import styled, { css } from "styled-components";
import Color from "color";

const baseColor = "#ffffff";

export const colorAdjust = {
  darken: (color, amount) => Color(color).darken(amount).hex(),
  lighten: (color, amount) => Color(color).lighten(amount).string(),
  rgba: (color, opacity) => Color(color).alpha(opacity).string(),
};

export const color = {
  primary: "#0064FF",
  primaryShade: colorAdjust.darken("#0064FF", 0.1),
  secondary: "#FF684F",
  secondaryShade: colorAdjust.darken("#FF684F", 0.1),
  tertiary: "#FFE8D8",
  tertiaryShade: colorAdjust.darken("#FFE8D8", 0.1),
  text: "#232323",
  header: "#0E274D",
  BG0: baseColor,
  BG1: colorAdjust.darken(baseColor, 0.05),
  BG2: colorAdjust.darken(baseColor, 0.1),
  BG3: colorAdjust.darken(baseColor, 0.15),
  BG4: colorAdjust.darken(baseColor, 0.2),
  BG5: colorAdjust.darken(baseColor, 0.25),
};

export const units = {
  ms: "10px",
  mm: "16px",
  ml: "24px",
  rs: "10px",
  rm: "16px",
  rl: "24px",
  ps: "10px",
  pm: "16px",
  pl: "24px",
  tablet: "1000px",
  mobile: "600px",
};

export const font = {
  roboto: css`
    font-family: "Roboto", sans-serif;
  `,
  title: css`
    font-size: 36px;
    letter-spacing: 2px;
  `,
  text: css`
    font-size: 20px;
    font-family: roboto-regular, sans-serif;
    letter-spacing: 0.5px;
    color: ${color.primary};
  `,
  error: css`
    font-size: 18px;
    font-family: din-condensed-bold, sans-serif;
    color: red !important;
  `,
  link: css`
    text-decoration: none;
    &:hover {
      color: ${colorAdjust.darken(color.tertiary, 0.2)};
    }
  `,
};

export const layout = {
  row: css`
    display: flex;
    flex-wrap: wrap;
  `,
  col: css`
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  `,
  centered: css`
    margin-left: auto;
    margin-right: auto;
  `,
};

export const modal = {
  inside: css`
    position: absolute;
    left: 20%;
    right: 20%;
    top: 15%;
    max-height: 80vh;
    padding: ${units.margin};
    border: 5px solid ${color.BG2};
    border-radius: 2px;
    margin: auto;
    background: ${color.BG2};
    overflow: auto;
    z-index: 10;
    ${layout.col};
  `,
  outside: css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 11;
  `,
};

export const cursor = {
  clickable: css`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
  `,
  draggable: css`
    cursor: grab;
    user-select: none;
  `,
  dragging: css`
    cursor: grabbing;
  `,
  notAllowed: css`
    cursor: not-allowed;
    user-select: none;
  `,
};

export const components = {
  input: css`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: ${color.tertiary};
    border: none;
    caret-color: ${color.primary};
    caret-shape: block;
    color: ${color.primary};
    padding: 2px 6px;
    font-size: 16px;
    border-radius: 0;
    box-shadow: none;
    &:focus {
      outline: none;
    }
  `,
  labeledInput: css`
    ${font.DCBold};
    font-size: 20px;
    color: ${color.primary};
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    & input {
      font-size: 16px;
      border-radius: 0;
      ${font.RCReg};
      box-shadow: none;
      background-color: ${color.tertiary};
      border: none;
      caret-color: ${color.primary};
      caret-shape: block;
      color: ${color.primary};
      padding: 2px 6px;
    }
    & input:focus {
      outline: none;
    }
  `,

  button: css`
    padding: 4px 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    height: 30px;
    font-size: 20px;
    ${font.roboto};
    line-height: 18px;
    background-color: ${color.primary};
    ${cursor.clickable};
    border-radius: 4px;
    border: 2px solid ${color.BG0};
    transition: background-color 0.1s;
    color: ${color.BG0};
    &:focus {
      outline: none;
    }
    &:hover {
      background-color: ${colorAdjust.darken(color.primary, 0.1)};
    }
    &:disabled {
      color: ${color.primary}90;
      border-color: ${color.primary}90;
      ${cursor.notAllowed};
    }
    &:disabled:hover {
      color: ${color.primary}90;
      border-color: ${color.primary}90;
      ${cursor.notAllowed};
      background-color: white;
    }
  `,
};
