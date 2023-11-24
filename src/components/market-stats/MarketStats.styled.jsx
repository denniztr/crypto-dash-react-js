import styled from "styled-components";

export const MarketStatsContainer = styled.div`
  color: white;
  text-align: center;
  font-weight: 800;
  border-radius: 16px;
  background-color: rgba(17, 17, 17, 0.15);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.60);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.60);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.60);
  grid-row: 7 / span 3;
  grid-column: 3 / 9;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  justify-content: space-around;
`;

export const CoinsTable = styled.table`
  // width: 33.33%;
  height: 80px;
  border-collapse: collapse;
`;

export const CoinsCaption = styled.caption`
  color: rgb(145, 145, 145);
  letter-spacing: 0.5px;
  font-size: 12px;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  padding: 10px 0 15px 0;
`;

export const CellsContainer = styled.tr`
  /* text-align: center; */
`;

export const CoinName = styled.td`
  width: 33.33%;
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  padding: 0 10px;
  color: rgb(210, 210, 210);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const CoinPrice = styled.td`
  width: 33.33%;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 500;
  text-align: center;
  padding: 0 10px;
  color: rgb(210, 210, 210);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const CoinUpdate24Hrs = styled.td`
  width: 33.33%;  
  font-size: 14px;
  color: #348334;
  font-weight: 700;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;