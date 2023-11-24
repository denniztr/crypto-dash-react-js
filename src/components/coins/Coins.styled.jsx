import styled from "styled-components";

export const CoinsContainer = styled.div`
  border-radius: 16px;
  background-color: rgba(17, 17, 17, 0.15);
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
  font-size: 14px;
  padding: 0 0 5px 10px;
  font-weight: 700;
  text-align: left;
  color: rgb(210, 210, 210);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const CoinPrice = styled.td`
  width: 33.33%;
  font-size: 14px;
  letter-spacing: 1px;
  padding-bottom: 5px;
  font-weight: 500;
  text-align: left;
  color: rgb(210, 210, 210);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const CoinUpdate24Hrs = styled.td`
  width: 33.33%;
  font-size: 14px;
  padding-bottom: 10px;
  color: #348334;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;