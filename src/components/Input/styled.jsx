import styled from "styled-components";
import * as colors from "../../config/colors";
import bgShorten from "../../assets/images/bg-shorten-mobile.svg";

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
  background-image: url(${bgShorten});
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
`;
