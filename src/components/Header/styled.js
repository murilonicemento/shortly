import styled from "styled-components";
import * as colors from "../../config/colors";

export const MyHeader = styled.header`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px;
  margin: auto;

  @media (min-width: 800px) {
    flex-wrap: nowrap;

    header {
      width: 86%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const NavigationBar = styled.ul`
  display: none;
  gap: 15px;
  padding-left: 20px;

  li {
    list-style-type: none;
    font-size: 15px;
    font-weight: 500;
    color: ${colors.text};
    cursor: pointer;
    transition: color 0.4s ease;

    &:hover {
      color: ${colors.buttonHover};
      transition: color 0.4s ease;
    }
  }

  @media (min-width: 800px) {
    display: flex;
  }
`;

export const Authentication = styled.div`
  display: none;

  a {
    width: 100px;
    height: 35px;
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;
    display: grid;
    place-items: center;
    cursor: pointer;
  }

  a:not(:last-child) {
    background-color: #fff;
    color: ${colors.text};
  }

  a:not(:first-child) {
    background-color: ${colors.button};
    border-radius: 20px;
    color: #fff;
    transition: background-color .4s ease;

      &:hover {
        background-color: ${colors.buttonHover};
        transition: background-color .4s ease;
      }
  }

  @media (min-width: 800px) {
    display: flex;
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

  @media (min-width: 800px) {
    display: none;
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
  border-radius: 8px;
  margin: 30px auto 0 auto;

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
