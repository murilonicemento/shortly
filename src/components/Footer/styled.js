import styled from "styled-components";
import * as colors from "../../config/colors";

export const MyFooter = styled.footer`
  display: grid;
  place-items: center;
  background-color: ${colors.title};
  padding: 40px;

  > img {
    margin-top: 50px;
    filter: invert();
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-top: 50px;
  }

  @media (min-width: 800px) {
    display: flex;
    align-items: self-start;
    justify-content: space-around;

    div:nth-child(2) {
      flex-direction: row;
      align-items: self-start;
    }
  }
`;

export const Links = styled.span`
  text-align: center;

  h3 {
    margin-bottom: 10px;
    font-size: 15px;
    color: #fff;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  ul li {
    list-style-type: none;
    font-size: 15px;
    color: ${colors.text};
    transition: color 0.4s ease;
    cursor: pointer;

    &:hover {
      color: #fff;
      transition: color 0.4s ease;
    }
  }

  @media (min-width: 800px) {
    text-align: left;
    ul {
      align-items: start;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-top: 40px;

  a {
    cursor: pointer;
  }
`;
