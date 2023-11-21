import { Link } from "react-router-dom";

import * as Styled from './Intro.styled';


export const IntroductionComponent = () => {
  return (
      <Styled.IntroductionContainer>
        <Styled.ProductDescriptionContainer> 
            <Styled.ProductTitle>Crypto<Styled.Span>Dash</Styled.Span></Styled.ProductTitle>
            <Styled.ProductDescription>CryptoDash is a comprehensive web application designed to provide users with a centralized platform for monitoring and analyzing cryptocurrency data. This project aims to offer a user-friendly and visually engaging experience for individuals interested in tracking the dynamic world of cryptocurrencies.</Styled.ProductDescription>
        </Styled.ProductDescriptionContainer>
        <Styled.ProductElements> 
          <Styled.ProductElementsDescription>
            CryptoDash aims to empower cryptocurrency enthusiasts, traders, and investors by consolidating essential information and tools in one intuitive platform, fostering informed decision-making within the dynamic and rapidly evolving world of digital assets.
          </Styled.ProductElementsDescription>
          <Styled.ProductElementsButtons>
            <Styled.ProductElementsButton>
              <Link to='/main' >GET STARTED</Link>
            </Styled.ProductElementsButton>
            <Styled.ProductElementsButton>
              ABOUT THE PROJECT
            </Styled.ProductElementsButton>
          </Styled.ProductElementsButtons>
        </Styled.ProductElements>
      </Styled.IntroductionContainer>
  )
};