import * as Styled from './Header.styled';



export const HeaderComponent = () => {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderTitleContainer>
        <Styled.HeaderTitle>Crypto<span style={{color: 'rgba(135, 0, 0, 1)'}}>Dash</span></Styled.HeaderTitle>
      </Styled.HeaderTitleContainer>
      <Styled.HeaderNavContainer>
        <Styled.HeaderLink>Dashboard</Styled.HeaderLink>
        <Styled.HeaderLink>Markets</Styled.HeaderLink>
        <Styled.HeaderLink>Stats</Styled.HeaderLink>
        <Styled.HeaderLink>Exchange</Styled.HeaderLink>
      </Styled.HeaderNavContainer>
      <Styled.HeaderInputContainer>
        <Styled.HeaderSearchQuery />
      </Styled.HeaderInputContainer>
      <Styled.ProfileContainer>
        <Styled.UserName><span style={{fontWeight: '700'}}>Welcome</span>, Dennis</Styled.UserName>
        <Styled.ProfilePicture></Styled.ProfilePicture>
      </Styled.ProfileContainer>
    </Styled.HeaderContainer>
  )
};