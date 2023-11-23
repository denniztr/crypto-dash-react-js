import { useNavigate } from 'react-router-dom';


import * as Styled from './Auth.styled';

export const AuthComponent = () => {
  const navigate = useNavigate();
  
  const signUp = () => {
    navigate('/main');
  }
  
  return (
    <Styled.AuthContainer>
      <Styled.AuthActionContainer>
        <Styled.AuthInput type='text' placeholder='Name'/>
        <Styled.AuthInput type='email' placeholder='Email'/>
        <Styled.AuthInput placeholder='Password'/>
        <Styled.AuthInput placeholder='Repeat password'/>
        <Styled.PrimaryButton onClick={signUp}>REGISTER</Styled.PrimaryButton>
      </Styled.AuthActionContainer>
    </Styled.AuthContainer>
  )
};