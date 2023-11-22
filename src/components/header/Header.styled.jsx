import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  grid-column: 1 / -1;
`;

export const HeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  color: rgb(250, 250, 250);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;
`;

export const HeaderNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`;

export const HeaderLink = styled.a`
  color: white;
  letter-spacing: 0.5px;
  transition: 0.7s;
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    border-bottom: 1px solid rgba(251, 3, 245, 0.65);
  }
`;

export const HeaderInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderSearchQuery = styled.input`
  width: 300px;
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

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 10px;
`;

export const UserName = styled.p`
  color: #fff;
  letter-spacing: 1px;
`;

export const ProfilePicture = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: #fff;
`;