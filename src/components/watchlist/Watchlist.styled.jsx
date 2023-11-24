import styled from "styled-components";

export const RatesContainer = styled.div`
  color: white;
  border-radius: 16px;
  background-color: rgba(17, 17, 17, 0.15);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.60);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.60);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.60);
  grid-column: span 2;
  grid-row: 1 / 7;
`;

export const ExchangesCaption = styled.caption`
  padding: 10px 0 10px 0;
  color: rgb(255, 255, 255);
  letter-spacing: 0.5px;
  font-size: 12px;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const ExchangesLineTitle = styled.th`
  color: rgb(145, 145, 145);
  letter-spacing: 0.5px;
  font-size: 12px;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  text-align: left;
  padding-bottom: 15px;
`;

export const CellElement = styled.tr``;

export const TitleName = styled(ExchangesLineTitle)`
  padding-left: 10px;
`;

export const TitleParis = styled(ExchangesLineTitle)`
  
`;

export const TitleVolume = styled(ExchangesLineTitle)`
  padding-left: 20px;
`;

export const ExchangeName = styled.td`
  padding-left: 10px;
  padding-bottom: 7px;
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  color: rgb(210, 210, 210);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: 0.4s;
  cursor: default;
  &:hover {
    //color: rgba(135, 0, 0, 1);
    color: rgb(136, 136, 136);
    text-shadow: 0 2px 4px rgba(70, 70, 70, 0.5);
  }
`;

export const ExchangePairs = styled.td`
  padding-bottom: 7px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: rgb(210, 210, 210);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  cursor: default;
`;

export const ExchangeVolume = styled.td`
  padding-left: 20px;
  padding-bottom: 7px;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  color: rgb(210, 210, 210);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.742);
  color: #348334;
  cursor: default;
`;