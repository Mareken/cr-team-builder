import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  background: #22333B;
  margin-bottom: 32px;
  padding: 0 40px;

  @media screen and (min-width: 360px) {
    justify-content: flex-start;
  }

  @media screen and (min-width: 1024px) {
    justify-content: center;
  }
`;

export const Logo = styled.img`
  height: 30px;
`;