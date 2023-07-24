import styled from "styled-components";
import * as colors from "../../config/colors";
import user from "../../assets/images/user.svg";
import mail from "../../assets/images/mail.svg";
import password from "../../assets/images/password.svg";

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

  div {
    width: 85%;
    margin: 20px auto;
    color: #fff;

    h1 {
      font-size: 28px;
      margin-bottom: 8px; 
      text-align: center;
    }

    p {
      width: 80%;
      max-width: 400px;
      margin: auto;
      font-size: 15px;
      text-align: center;
    }
  }
`;

export const Form = styled.form`
  width: 85%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
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

  input {
    background-color: #f5f5f5;
    padding: 10px 0px 10px 28px;
    color: ${colors.title};
    border-radius: 4px;
    font-size: 12px;
  }

  #name {
    background-image: url(${user});
    background-repeat: no-repeat;
    background-position: 5px center;
    background-size: 18px;
  }

  #email {
    background-image: url(${mail});
    background-repeat: no-repeat;
    background-position: 5px center;
    background-size: 18px;
  }

  #password {
    background-image: url(${password});
    background-repeat: no-repeat;
    background-position: 5px center;
    background-size: 18px;
  }

  button {
    width: 100%;
    height: 40px;
    margin-top: 8px;
    background-color: ${colors.button};
    font-size: 18px;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export const CreateAccount = styled.span`
  font-size: 12px;
  text-align: center;
  margin-top: 8px;
  color: grey;

    a {
      font-size: 12px;
      color: ${colors.button};
      cursor: pointer;
    }
`;

export const ErrorMessage = styled.span`
  width: fit-content;
  font-size: 10px;
  color: #dc143c;

  span {
    font-size: 10px;
  }

  ul li {
    font-size: 10px;
    list-style-position: inside;
  }
`;