import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    font-family: "Poppins", Arial, sans-serif;
  }

  input, button {
    font-family: "Poppins", Arial, sans-serif;
    color: #fff;
  }
`;
