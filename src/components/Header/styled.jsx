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
  display: ${(props) => (props.active ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 18px;
  width: 85%;
  height: 300px;
  background-color: ${colors.statisticsCircle};
  margin: auto;
  border-radius: 8px;

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
      transition: color 0.4s ease;
    }

    &:last-child {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90%;
      height: 45px;
      background-color: ${colors.button};
      border-radius: 20px;
      cursor: pointer;
    }
  }
`;
