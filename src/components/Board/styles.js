import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 70px);
  grid-gap: 16px;
  gap: 16px;
  justify-self: center;
  margin-bottom: 32px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(8, 50px);
    grid-gap: 16px;
    gap: 16px;
  }
`;