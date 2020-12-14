import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  border: 2px solid #425C68;
  border-radius: 2px;
  background: #344852;
  cursor: pointer;
  transition: all .1s ease;

  @media screen and (max-width: 1200px) {
    height: 50px;
  }
`;
