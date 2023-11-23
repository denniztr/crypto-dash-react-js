import { HeaderComponent } from '../../components/header/Header';
import { CoinsComponent } from '../../components/coins/Coins';
import { ChartComponent } from '../../components/chart/Chart';
import { WatchListComponent } from '../../components/watchlist/Watchlist';
import { MarketStatsComponent } from '../../components/market-stats/MarketStats';
import { RatesComponent } from '../../components/rates/Rates';

import * as Styled from './Main.styled';


export const Main = () => {
  return (
    <>
      <Styled.MainContainer>
       <Styled.MainContent>
          <HeaderComponent />
          <Styled.GridContainer>
            <CoinsComponent />
            <ChartComponent />
            <WatchListComponent />
            <MarketStatsComponent />
            <RatesComponent />
          </Styled.GridContainer>
       </Styled.MainContent>
      </Styled.MainContainer>
    </>
  )
}