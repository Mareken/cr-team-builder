import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 32px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(8, 70px);
  grid-template-rows: repeat(4, 70px);
  grid-gap: 16px;
  gap: 16px;
  justify-self: center;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(8, 35px);
    grid-template-rows: repeat(4, 35px);
    grid-gap: 8px;
    gap: 8px;
  }
`;

export const BaseBoard = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(8, 70px);
  grid-gap: 16px;
  gap: 16px;
  justify-self: center;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(8, 35px);
    grid-template-rows: repeat(4, 35px);
    grid-gap: 8px;
    gap: 8px;
  }
`;

export const HeroesBoard = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(8, 70px);
  grid-gap: 16px;
  gap: 16px;
  justify-self: center;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(8, 35px);
    grid-template-rows: repeat(4, 35px);
    grid-gap: 8px;
    gap: 8px;
  }
`;