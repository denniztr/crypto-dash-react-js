import { Link } from 'react-router-dom';

import * as Styled from './Intro.styled';


export const IntroductionComponent = () => {
  return (
      <Styled.IntroductionContainer>
        <Styled.IntroductionTitleContainer>
          <Styled.IntroductionTitle>Crypto<span style={{color: 'rgba(135, 0, 0, 1)'}}>Dash</span></Styled.IntroductionTitle>
          <Styled.IntroductionSubtitle>Make crypto clear and simple</Styled.IntroductionSubtitle>
        </Styled.IntroductionTitleContainer>
        <Styled.IntroductionButtonsContainer>
          <Link to="/sign-up" >
            <Styled.IntroductionContainerButton>GET STARTED</Styled.IntroductionContainerButton>
          </Link>
          <Styled.IntroductionContainerButton>ABOUT THE PROJECT</Styled.IntroductionContainerButton>
        </Styled.IntroductionButtonsContainer>
      </Styled.IntroductionContainer>
  )
};