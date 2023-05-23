import styled from "styled-components";
import * as colors from "../../config/colors";

export const MainSection = styled.section`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
  }

  h1 {
    margin-top: 25px;
    text-align: center;
    font-size: 45px;
    line-height: 50px;
    color: ${colors.title};
  }

  p {
    margin-top: 10px;
    text-align: center;
    font-weight: 500;
    color: ${colors.text};
  }

  button {
    width: 150px;
    height: 50px;
    margin-top: 30px;
    background-color: ${colors.button};
    font-weight: 600;
    border-radius: 30px;
  }
`;
