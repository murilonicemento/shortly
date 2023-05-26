import styled from "styled-components";
import * as colors from "../../config/colors";
import bgShortenMobile from "../../assets/images/bg-shorten-mobile.svg";
import bgShortenDesktop from "../../assets/images/bg-shorten-desktop.svg";

export const Form = styled.form``;

export const MyInput = styled.section`
  width: 90%;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 70px auto 0 auto;
  background-color: ${colors.statisticsCircle};
  background-image: url(${bgShortenMobile});
  background-repeat: no-repeat;
  background-position: right top;
  border-radius: 10px;
  position: relative;
  z-index: 1;

  div {
    width: 90%;
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

    div {
      width: 70%;
    }

    button {
      width: 14%;
    }
  }
`;

export const LinkInput = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 5px;
  font-weight: 500;
  padding: 20px;
  border: ${(props) => (props.isEmpty ? "2px solid #F74E4E " : "none")};
  border-radius: 4px;
  color: ${colors.text};

  ::placeholder {
    color: ${(props) => (props.isEmpty ? "#F74E4E " : colors.text)};
  }

  @media (min-width: 800px) {
    width: 100%;
  }
`;

export const ErrorMessage = styled.p`
  display: ${(props) => (props.isEmpty ? "flex" : "none")};
  font-size: 13px;
  font-weight: 400;
  font-style: italic;
  color: #f74e4e;
  position: absolute;
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
    color: ${colors.title};
  }

  div {
    width: 90%;
    margin: auto;

    a {
      text-decoration: none;
      font-weight: 500;
      color: ${colors.button};
    }

    button {
      width: 100%;
      height: 50px;
      background-color: ${colors.button};
      margin-top: 15px;
      font-weight: 600;
      color: #fff;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  hr {
    border-bottom: 1px solid ${colors.text};
    opacity: 0.5;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    hr {
      display: none;
    }

    div {
      width: 30%;
      display: flex;
      align-items: center;
      gap: 25px;
      margin-right: 20px;

      button {
        margin: 0;
      }
    }
  }
`;

export const Button = styled.button`
  background-color: ${(props) =>
    props.copied ? colors.statisticsCircle : colors.button};
`;
