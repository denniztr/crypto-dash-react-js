import { HeaderComponent } from '../../components/header/Header';
import { CoinsComponent } from '../../components/coins/Coins';
import { ChartComponent } from '../../components/chart/Chart';

import * as Styled from './Main.styled';


export const Main = () => {
  return (
    <>
      <Styled.MainContainer>
       <Styled.MainContent>
          <HeaderComponent />
          <Styled.FlexContainer>
            <CoinsComponent />
            <ChartComponent />
          </Styled.FlexContainer>
       </Styled.MainContent>
      </Styled.MainContainer>
    </>
  )
}