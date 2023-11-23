import styled from "styled-components";

export const AuthContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 25px;
  padding-bottom: 10px;
`;

export const AuthInput = styled.input`
  color: white;
  letter-spacing: 1px;
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid rgb(251, 3, 245, 0.3);
  transition: 0.7s;
  &:focus,
  &:active {
    border-bottom: 1px solid rgba(251, 3, 245, 0.65);
  }
`;

export const PrimaryButton = styled.button`
  height: 30px;
  letter-spacing: 3px;
  color: white;
  background-color: transparent;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 10px;
  transition: 0.7s;
  outline: none;
  cursor: pointer;
  &:hover,
  &:focus  {
    color: black;
    border: 1px solid rgb(0, 0, 0);
    background-color: rgba(255, 255, 255, 0.653);
  }
`;