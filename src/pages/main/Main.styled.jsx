import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContent = styled.div`
  width: 1400px;
  border-radius: 40px;
  background-color: rgba(235, 230, 230, 0.1);
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 50px);
  gap: 10px;
  padding: 10px 10px 0 10px;
`;

