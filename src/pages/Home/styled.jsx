import styled from "styled-components";
import * as colors from "../../config/colors";
import boost from "../../assets/images/bg-boost-mobile.svg";

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
    cursor: pointer;
  }
`;

export const BoostSection = styled.section`
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: ${colors.statisticsCircle};
  background-image: url(${boost});
  background-repeat: no-repeat;
  background-position: right;

  h2 {
    font-size: 30px;
    color: #fff;
  }

  button {
    width: 150px;
    height: 50px;
    background-color: ${colors.button};
    font-weight: 600;
    border-radius: 30px;
    cursor: pointer;
  }
`;
