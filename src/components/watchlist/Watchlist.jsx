import * as Styled from './Watchlist.styled';

export const WatchListComponent = () => {
  return (
    <Styled.RatesContainer>
      <table style={{width: '100%'}}>
        <Styled.ExchangesCaption>Exchanges</Styled.ExchangesCaption>
        <thead>
          <tr>
            <Styled.TitleName>Name</Styled.TitleName>
            <Styled.TitleParis>Pairs</Styled.TitleParis>
            <Styled.TitleVolume>Volume</Styled.TitleVolume>
          </tr>
        </thead>
        <tbody>
          <Styled.CellElement>
            <Styled.ExchangeName>Binance</Styled.ExchangeName>
            <Styled.ExchangePairs>823</Styled.ExchangePairs>
            <Styled.ExchangeVolume>40.8%</Styled.ExchangeVolume>
          </Styled.CellElement>
          <Styled.CellElement>
            <Styled.ExchangeName>Coinbase Pro</Styled.ExchangeName>
            <Styled.ExchangePairs>218</Styled.ExchangePairs>
            <Styled.ExchangeVolume>7.5%</Styled.ExchangeVolume>
          </Styled.CellElement>
          <Styled.CellElement>
            <Styled.ExchangeName>WhiteBIT</Styled.ExchangeName>
            <Styled.ExchangePairs>90</Styled.ExchangePairs>
            <Styled.ExchangeVolume>5.4%</Styled.ExchangeVolume>
          </Styled.CellElement>
          <Styled.CellElement>
            <Styled.ExchangeName>Kraken</Styled.ExchangeName>
            <Styled.ExchangePairs>343</Styled.ExchangePairs>
            <Styled.ExchangeVolume>5.2%</Styled.ExchangeVolume>
          </Styled.CellElement>
          <Styled.CellElement>
            <Styled.ExchangeName>DigiFinexo</Styled.ExchangeName>
            <Styled.ExchangePairs>135</Styled.ExchangePairs>
            <Styled.ExchangeVolume>5.2%</Styled.ExchangeVolume>
          </Styled.CellElement>
          <Styled.CellElement>
            <Styled.ExchangeName>Huobi</Styled.ExchangeName>
            <Styled.ExchangePairs>190</Styled.ExchangePairs>
            <Styled.ExchangeVolume>4.1%</Styled.ExchangeVolume>
          </Styled.CellElement>
          <Styled.CellElement>
            <Styled.ExchangeName>Gate</Styled.ExchangeName>
            <Styled.ExchangePairs>1290</Styled.ExchangePairs>
            <Styled.ExchangeVolume>4.8%</Styled.ExchangeVolume>
          </Styled.CellElement>
          <Styled.CellElement>
            <Styled.ExchangeName>Uniswap (V3)</Styled.ExchangeName>
            <Styled.ExchangePairs>291</Styled.ExchangePairs>
            <Styled.ExchangeVolume>3.9%</Styled.ExchangeVolume>
          </Styled.CellElement>
          <Styled.CellElement>
            <Styled.ExchangeName>Kucoin</Styled.ExchangeName>
            <Styled.ExchangePairs>608</Styled.ExchangePairs>
            <Styled.ExchangeVolume>2.9%</Styled.ExchangeVolume>
          </Styled.CellElement>
        </tbody>
      </table>
    </Styled.RatesContainer>
  )
};