import styled from "styled-components";
import * as colors from "../../config/colors"

export const Container = styled.div`
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.statisticsCircle};
`;

export const Form = styled.form`
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 28px;
    font-weight: 600;
  }

  label {
    font-size: 15px;
  }

  input {
    background-color: #f5f5f5;
    padding: 5px 10px;
    color: ${colors.text};
    border-radius: 4px;
    font-size: 12px;
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
`;