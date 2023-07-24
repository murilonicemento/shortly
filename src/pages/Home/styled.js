import styled from "styled-components";
import * as colors from "../../config/colors";
import boostMobile from "../../assets/images/bg-boost-mobile.svg";
import boostDesktop from "../../assets/images/bg-boost-desktop.svg";

export const MainSection = styled.section`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-top: 25px;
      font-size: 45px;
      line-height: 50px;
      color: ${colors.title};
    }

    p {
      margin-top: 10px;
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
  }

  @media (min-width: 800px) {
    flex-direction: row-reverse;
    justify-content: space-between;

    img {
      width: 60%;
    }

    div {
      align-items: self-start;
      text-align: start;

      h1 {
        font-size: 65px;
        line-height: 70px;
      }
    }
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
  background-image: url(${boostMobile});
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

  @media (min-width: 800px) {
    background-image: url(${boostDesktop});
  }
`;
