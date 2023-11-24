import * as Styled from './MarketStats.styled';

export const MarketStatsComponent = () => {
  return (
    <Styled.MarketStatsContainer>
            <Styled.CoinsTable>
        <Styled.CoinsCaption>Highlight Coin</Styled.CoinsCaption>
        <Styled.CellsContainer>
            <Styled.CoinName>BLUR</Styled.CoinName>
            <Styled.CoinPrice>37,497.78</Styled.CoinPrice>
            <Styled.CoinUpdate24Hrs>+2.5%</Styled.CoinUpdate24Hrs>
          </Styled.CellsContainer>
          <Styled.CellsContainer>
            <Styled.CoinName>ETH</Styled.CoinName>
            <Styled.CoinPrice>2068.86</Styled.CoinPrice>
            <Styled.CoinUpdate24Hrs>+2.5%</Styled.CoinUpdate24Hrs>
          </Styled.CellsContainer>
          <Styled.CellsContainer>
            <Styled.CoinName>BNB</Styled.CoinName>
            <Styled.CoinPrice>233.69</Styled.CoinPrice>
            <Styled.CoinUpdate24Hrs>+2.5%</Styled.CoinUpdate24Hrs>
          </Styled.CellsContainer>
      </Styled.CoinsTable>
      <Styled.CoinsTable>
        <Styled.CoinsCaption>Top Gainer Coin</Styled.CoinsCaption>
          <Styled.CellsContainer>
            <Styled.CoinName>BLUR</Styled.CoinName>
            <Styled.CoinPrice>37,497.78</Styled.CoinPrice>
            <Styled.CoinUpdate24Hrs>+2.5%</Styled.CoinUpdate24Hrs>
          </Styled.CellsContainer>
          <Styled.CellsContainer>
            <Styled.CoinName>ETH</Styled.CoinName>
            <Styled.CoinPrice>2068.86</Styled.CoinPrice>
            <Styled.CoinUpdate24Hrs>+2.5%</Styled.CoinUpdate24Hrs>
          </Styled.CellsContainer>
          <Styled.CellsContainer>
            <Styled.CoinName>BNB</Styled.CoinName>
            <Styled.CoinPrice>233.69</Styled.CoinPrice>
            <Styled.CoinUpdate24Hrs style={{color: '#480101'}} >-0.17%</Styled.CoinUpdate24Hrs>
          </Styled.CellsContainer>
      </Styled.CoinsTable>
      <Styled.CoinsTable>
        <Styled.CoinsCaption>Top Volume Coin</Styled.CoinsCaption>
        <Styled.CellsContainer>
            <Styled.CoinName>BLUR</Styled.CoinName>
            <Styled.CoinPrice>37,497.78</Styled.CoinPrice>
            <Styled.CoinUpdate24Hrs>+2.5%</Styled.CoinUpdate24Hrs>
          </Styled.CellsContainer>
          <Styled.CellsContainer>
            <Styled.CoinName>ETH</Styled.CoinName>
            <Styled.CoinPrice>2068.86</Styled.CoinPrice>
            <Styled.CoinUpdate24Hrs style={{color: '#480101'}} >-0.17%</Styled.CoinUpdate24Hrs>
          </Styled.CellsContainer>
          <Styled.CellsContainer>
            <Styled.CoinName>BNB</Styled.CoinName>
            <Styled.CoinPrice>233.69</Styled.CoinPrice>
            <Styled.CoinUpdate24Hrs>+2.5%</Styled.CoinUpdate24Hrs>
          </Styled.CellsContainer>
      </Styled.CoinsTable>
    </Styled.MarketStatsContainer>
  )
}