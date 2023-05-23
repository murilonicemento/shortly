import styled from "styled-components";
import * as colors from "../../config/colors";
// import bgShorten from "../../assets/images/bg-shorten-mobile.svg";
// import bgBoost from "../../assets/images/bg-boost-mobile.svg";

export const MyInput = styled.section`
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 70px;

  input {
    width: 90%;
    height: 50px;
    font-weight: 500;
    padding: 20px;
    border-radius: 4px;
  }

  button {
    width: 90%;
    height: 50px;
    background-color: ${colors.button};
    font-weight: 600;
    color: #fff;
    border-radius: 4px;
  }
`;
