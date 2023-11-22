import * as Styled from './Coins.styled';


export const CoinsComponent = () => {
  return (
      <Styled.CoinsContainer>
        <Styled.CoinsTitle>Coins</Styled.CoinsTitle>
        <ul>
          <li>BTC</li>
          <li>LTC</li>
          <li>XDG</li>
          <li>ETH</li>
          <li>DASH</li>
          <li>XRP</li>
        </ul>
      </Styled.CoinsContainer>
  )
}