import { useEffect, useState } from 'react';

import * as Styled from './Coins.styled';


export const CoinsComponent = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState();
  const [ethereumPrice, setEthereumPrice] = useState();
  const [allPrices, setAllPrices] = useState();

  useEffect(() => {
    const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin')

    pricesWs.onmessage = function (msg) {
        const data = JSON.parse(msg.data);
        setBitcoinPrice(data.bitcoin);
    }
  }, []);

  useEffect(() => {
    const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=ethereum')

    pricesWs.onmessage = function (msg) {
        const data = JSON.parse(msg.data);
        setEthereumPrice(data.ethereum);
    }
  }, []);

  useEffect(() => {
    const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=ALL')

    pricesWs.onmessage = function (msg) {
        const data = JSON.parse(msg.data);
        setAllPrices(data);
    }
  }, []);

console.log(allPrices);

  return (
      <Styled.CoinsContainer>
        <Styled.CoinsTable>
          <Styled.CoinsCaption>Top Rated Coins</Styled.CoinsCaption>
          <Styled.CellsContainer>
            <Styled.CoinName>BTC</Styled.CoinName>
            <Styled.CoinPrice>{bitcoinPrice}</Styled.CoinPrice>
            <Styled.CoinUpdate24Hrs>+2.5%</Styled.CoinUpdate24Hrs>
          </Styled.CellsContainer>
          <Styled.CellsContainer>
            <Styled.CoinName>ETH</Styled.CoinName>
            <Styled.CoinPrice>{ethereumPrice}</Styled.CoinPrice>
            <Styled.CoinUpdate24Hrs>+2.4%</Styled.CoinUpdate24Hrs>
          </Styled.CellsContainer>
          <Styled.CellsContainer>
            <Styled.CoinName>USDT</Styled.CoinName>
            <Styled.CoinPrice>1.00</Styled.CoinPrice>
            <Styled.CoinUpdate24Hrs>+0.06%</Styled.CoinUpdate24Hrs>
          </Styled.CellsContainer>
          <Styled.CellsContainer>
            <Styled.CoinName>BNB</Styled.CoinName>
            <Styled.CoinPrice>345</Styled.CoinPrice>
            <Styled.CoinUpdate24Hrs style={{color: '#480101'}} >-0.17%</Styled.CoinUpdate24Hrs>
          </Styled.CellsContainer>
          <Styled.CellsContainer>
            <Styled.CoinName>XRP</Styled.CoinName>
            <Styled.CoinPrice>0.61</Styled.CoinPrice>
            <Styled.CoinUpdate24Hrs>+3.41%</Styled.CoinUpdate24Hrs>
          </Styled.CellsContainer>
          <Styled.CellsContainer>
            <Styled.CoinName>SOL</Styled.CoinName>
            <Styled.CoinPrice>58.68</Styled.CoinPrice>
            <Styled.CoinUpdate24Hrs>+7.06%</Styled.CoinUpdate24Hrs>
          </Styled.CellsContainer>
          <Styled.CellsContainer>
            <Styled.CoinName>USDC</Styled.CoinName>
            <Styled.CoinPrice>1.00</Styled.CoinPrice>
            <Styled.CoinUpdate24Hrs>+2.50%</Styled.CoinUpdate24Hrs>
          </Styled.CellsContainer>
          <Styled.CellsContainer>
            <Styled.CoinName>ADA</Styled.CoinName>
            <Styled.CoinPrice>0.38</Styled.CoinPrice>
            <Styled.CoinUpdate24Hrs>+4.20%</Styled.CoinUpdate24Hrs>
          </Styled.CellsContainer>
        </Styled.CoinsTable>
      </Styled.CoinsContainer>
  )
}