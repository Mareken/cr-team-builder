import styled from 'styled-components';

import headerBg from '../../assets/images/bg.png';

interface Props {
  isLogged: boolean;
}

export const Container = styled.header<Props>`
  width: 100%;
  display: flex;
  align-items: center;
  height: ${props => props.isLogged ? '200px' : '150px'};
  background: url(${headerBg}), linear-gradient(to right, rgba(10, 9, 8, .9), rgba(10, 9, 8, .6), rgba(10, 9, 8, .9)) ;
  background-blend-mode: multiply;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 60%;
  padding: 0 80px;
  padding-bottom: ${props => props.isLogged ? '50px' : 0};
  justify-content: space-between;
  transition: all .3s ease-out;
  margin-bottom: 32px;
  position: relative;

  @media screen and (max-width: 1024px) {
    padding: 0 20px;
    height: 80px;
  }
`;

export const Logo = styled.img`
  height: 30px;
  cursor: pointer;
`;

export const Actions = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const SignupBtn = styled.button`
  color: #fff;
  border: 1px solid #344852;
  width: 130px;
  height: 40px;
  text-align: center;
  border-radius: 4px;
  margin-right: 8px;
  cursor: pointer;
  transition: all .15s ease;
  background: transparent;

  &:hover {
    border-color: #0087C2;
  }

  @media screen and (max-width: 1024px) {
    width: 60px;
    background: #344852;
    padding-top: 5px;
  }
`;

export const LoginBtn = styled.button`
  color: #fff;
  background: #0087C2;
  width: 130px;
  height: 40px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all .15s ease;

  &:hover {
    background: #006A98;
  }

  @media screen and (max-width: 1024px) {
    width: 60px;
    padding-top: 5px;
  }
`;

export const UserArea = styled.div`
  position: relative;
`;

export const ProfilePic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 0 1px #b1bec7, 0 0 0 1px #b1bec7 inset;
`;

export const UserPopup = styled.div`
  position: absolute;
  right: 80px;
  top: 108px;
  background: #344852;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  transition: all .15s cubic-bezier(.785,.135,.15,.86);
  pointer-events: none;
  opacity: 0;
  transform: translateY(-5px);
`;

export const UserPopupOverlay = styled.div`
  width: 100%;
  height: 100%;
  cursor: auto;
`;

export const PopupAction = styled.button`
  padding-left: 8px;
  width: 80px;
  height: 40px;
  border-radius: 5px;
  background: #344852;
  color: #fff;
  cursor: pointer;
  text-align: left;
  transition: all .15s ease;

  &:hover {
    background: #22333B;
  }
`;

export const UserPopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 55;
  pointer-events: none;
  
  &.open {
    pointer-events: auto;

    ${UserPopup} {
      pointer-events: auto;
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const SubHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 9, 8, .5);
  position: absolute;
  left: 0;
  bottom: 0;
`;

export const Tab = styled.button`
  background: transparent;
  height: 100%;
  color: #fff;
  cursor: pointer;
  position: relative;
  color: #b1bec7;
  transition: all .15s ease;
  margin-right: 15px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    border-radius: 1px;
    background: #0087C2;
    transform: scaleX(0);
    transition: all .15s ease;
  }

  &.active {
    color: #fff;

    &::after {
      transform: scaleX(1);
    }
  }
`;