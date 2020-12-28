import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 360px) {
    position: absolute;
    right: 40px;
    top: 10px;
  }

  @media screen and (min-width: 1024px) {
    position: initial;
  }
`;

export const BtnClearTeam = styled.button`
  color: #fff;
  border: 1px solid #344852;
  width: 130px;
  height: 40px;
  text-align: center;
  border-radius: 2px;
  margin-right: 8px;
  cursor: pointer;
  transition: all .15s ease;

  &:hover {
    border-color: #0087C2;
  }

  @media screen and (min-width: 360px) {
    background: #22333B;
  }

  @media screen and (min-width: 1024px) {
    background: #0A0908;
  }
`;

export const BtnShare = styled.button`
  color: #fff;
  background: #0087C2;
  width: 130px;
  height: 40px;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
  transition: all .15s ease;

  &:hover {
    background: #006A98;
  }
`;