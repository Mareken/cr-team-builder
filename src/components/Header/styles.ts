import styled from 'styled-components';

import bg from '../../assets/images/bg.png';

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  height: 150px;
  background: url(${bg}), linear-gradient(to right, rgba(10, 9, 8, .9), rgba(10, 9, 8, .6), rgba(10, 9, 8, .9)) ;
  background-blend-mode: multiply;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 60%;
  margin-bottom: 32px;
  padding: 0 80px;
  justify-content: space-between;
  transition: all .3s ease-out;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
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
`;