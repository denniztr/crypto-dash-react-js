import styled from "styled-components";

export const CoinsContainer = styled.div`
  border-radius: 16px;
  background-color: rgb(103 103 103 / 53%);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.60);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.60);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.60);
  grid-column: 1 / 3;
  grid-row: 1 / 7;
`;

export const CoinsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const CoinsCaption = styled.caption`
  padding: 10px 0 10px 0;
  color: rgb(255, 255, 255);
  letter-spacing: 0.5px;
  font-size: 12px;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const CellsContainer = styled.tr`
  text-align: center;
`;

export const CoinName = styled.td`
  width: 33.33%;
  padding: 0 0 5px 10px;
  font-weight: 700;
  text-align: left;
`;

export const CoinPrice = styled.td`
  width: 33.33%;
  padding-bottom: 5px;
  font-weight: 500;
  text-align: left;
`;

export const CoinUpdate24Hrs = styled.td`
  width: 33.33%;
  padding-bottom: 10px;
  color: #348334;
  font-weight: 700;
`;