import styled from "styled-components";


export const IntroductionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 150px;
`;

export const IntroductionTitleContainer = styled.div`
  margin-top: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const IntroductionTitle = styled.h1`
  color: rgb(250, 250, 250);
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 45px;
`;

export const IntroductionSubtitle = styled.p`
  color: rgb(250, 250, 250);
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 6px;
  width: 500px;
`;

export const IntroductionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px;
`;

export const IntroductionContainerButton = styled.button`
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  letter-spacing: 1px;
  background-color: transparent;
  padding: 10px 30px;
  border: solid #ffffff 2px;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 9px;
  transition : 1000ms;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    letter-spacing: 1.5px;
    transition : 1000ms;
    padding: 10px 50px;
    transform : translateY(-0px);
    background-color: #fff;
    color: #000000;
  }
`;


