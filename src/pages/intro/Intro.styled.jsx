import styled, { keyframes } from "styled-components";

const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;


export const IntroductionContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
`;

export const ProductDescriptionContainer = styled.div`
  grid-column: 1 / span 3;
  border-right: 1px  solid black;
  height: 450px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const ProductTitle = styled.h1`
  color: black;
  font-weight: 700;
  letter-spacing: 0.5px;
  overflow: hidden; /* чтобы текст не выходил за пределы блока */
  white-space: nowrap; /* запрет переноса текста на новую строку */
  animation: ${typingAnimation} 5s steps(40, end); /* длительность анимации и количество "шагов" */
`;

export const Span = styled.span`
  color: #722f37;
  font-weight: 800;
`;

export const ProductDescription = styled.p`
  letter-spacing: 1.5px;
  color: black;
`;

export const ProductElements = styled.div`
  grid-column: 4 / span 4;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
  padding: 0 0 10px 25px;
`;

export const ProductElementsDescription = styled.p`
  letter-spacing: 1px;
  color: black;
`;

export const ProductElementsButtons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 15px;
`;

export const ProductElementsButton = styled.button`
  font-family: Roboto, sans-serif;
  font-weight: 100;
  font-size: 14px;
  color: #000000;
  background-color: #ffffff;
  padding: 10px 30px;
  border: solid #000000 2px;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 0px 40px 8px;
  transition : 667ms;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  &:hover {
    transition : 667ms;
    padding: 10px 41px;
    transform : translateY(-0px);
    background-color: #000000;
    color: #ffffff;
    border: solid 2px #000000;
}
`;


