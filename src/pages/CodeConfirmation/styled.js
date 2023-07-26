import styled from "styled-components";
import * as colors from "../../config/colors";
import key from "../../assets/images/key.svg";

export const Container = styled.div`
  height: 100vh;
  margin: auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgb(2,0,36);
  background: linear-gradient(120deg,  rgba(0,212,255,1) 0%, rgba(2,0,36,0.8) 80%);
`;

export const Form = styled.form`
  width: 85%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border-radius: 4px;
  background-color: #fff;

  h1 {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    color: ${colors.button};
  }

  span {
    width: 60%;
    max-width: 500px;
    font-size: 15px;
    text-align: center;
  }

  input {
    background-image: url(${key});
    background-repeat: no-repeat;
    background-position: 5px center;
    background-size: 18px;
    background-color: #f5f5f5;
    padding: 10px 0px 10px 28px;
    color: ${colors.title};
    border-radius: 4px;
    font-size: 12px;
  }

  #submit-btn {
    width: 60%;
    max-width: 500px;
    height: 40px;
    margin-top: 8px;
    background-color: ${colors.button};
    font-size: 18px;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color .4s ease;

    &:hover {
      background-color: ${colors.buttonHover};
      transition: background-color .4s ease;
    }
  }
`;

export const ErrorMessage = styled.span`
  width: fit-content;
  font-size: 10px;
  color: #dc143c;
`;

export const ForwardCode = styled.button`
  background-color: transparent;
  font-size: 15px;
  text-decoration: underline;
  color: ${colors.button};
  cursor: pointer;
  transition: color .3s ease;

  &:hover {
    color: ${colors.buttonHover};
    transition: color .3s ease;
  }
`;