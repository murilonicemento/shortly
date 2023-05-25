import styled from "styled-components";
import * as colors from "../../config/colors";
import bgShortenMobile from "../../assets/images/bg-shorten-mobile.svg";
import bgShortenDesktop from "../../assets/images/bg-shorten-desktop.svg";

export const Form = styled.form``;

export const MyInput = styled.section`
  width: 90%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 70px auto 0 auto;
  background-color: ${colors.statisticsCircle};
  background-image: url(${bgShortenMobile});
  background-repeat: no-repeat;
  background-position: right top;
  border-radius: 10px;
  position: relative;
  z-index: 1;

  input {
    width: 90%;
    height: 50px;
    font-weight: 500;
    padding: 20px;
    border-radius: 4px;
    color: ${colors.text};
  }

  button {
    width: 90%;
    height: 50px;
    background-color: ${colors.button};
    font-weight: 600;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    background-image: url(${bgShortenDesktop});
    background-position: left;
    background-size: cover;

    input {
      width: 76%;
    }

    button {
      width: 14%;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  z-index: 1;
  width: 90%;
  background-color: #fff;
  margin: 30px auto 0 auto;
  padding: 20px 0 20px 0;
  border-radius: 4px;

  p {
    margin-left: 20px;
    font-weight: 500;

    &:nth-child(1) {
      color: ${colors.title};
    }

    &:nth-child(3) {
      color: ${colors.button};
    }
  }

  hr {
    border-bottom: 1px solid ${colors.text};
    opacity: 0.5;
  }

  button {
    width: 90%;
    height: 50px;
    background-color: ${colors.button};
    margin: auto;
    font-weight: 600;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
`;
