import { createGlobalStyle } from "styled-components";
import * as colors from "../config/colors";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    font-size: 18px;
    font-family: "Poppins", Arial, sans-serif;
  }

  body {
    ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-track {
            background: #fff;
            border-radius: 30px;
        }

        ::-webkit-scrollbar-thumb {
            background: ${colors.button};
            border-radius: 7px;
        }
  }

  input, button {
    font-family: "Poppins", Arial, sans-serif;
    color: #fff;
  }
`;
