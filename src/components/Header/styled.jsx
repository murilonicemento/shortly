import styled from "styled-components";
import * as colors from "../../config/colors";

export const MyHeader = styled.header`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin: auto;
`;

export const NavigationBar = styled.ul`
  display: none;
`;

export const Authentication = styled.div`
  button {
    display: none;
    width: 80px;
    height: 30px;
    cursor: pointer;
    font-weight: bold;
  }

  button:not(:last-child) {
    background-color: #fff;
    color: ${colors.text};
  }

  button:not(:first-child) {
    background-color: ${colors.button};
    border-radius: 20px;
  }
`;

export const Bars = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 25px;
  height: 15px;
  cursor: pointer;

  div {
    border: 2px solid ${colors.text};
  }
`;

export const Sidebar = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 18px;
  width: 85%;
  height: 260px;
  background-color: ${colors.title};
  margin: auto;
  border-radius: 4px;

  hr {
    width: 90%;
    height: 0px;
    border-bottom: 1px solid ${colors.text};
    opacity: 0.2;
  }

  li {
    list-style-type: none;
    a {
      text-decoration: none;
      color: #fff;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;
