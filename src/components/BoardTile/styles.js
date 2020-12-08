import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  border: 2px solid transparent;
  border-radius: 2px;
  background: ${props => props.isOver ? '#0087C2 !important' : '#344852'};
  transition: all .1s ease;
  border-color: ${props => props.isOver ? '#0087C2' : '#425C68'};

  &:nth-of-type(16n+16),
  &:nth-of-type(16n+14),
  &:nth-of-type(16n+12),
  &:nth-of-type(16n+10),
  &:nth-of-type(16n+7),
  &:nth-of-type(16n+5),
  &:nth-of-type(16n+3),
  &:nth-of-type(16n+1) {
    background: #22333B;
  }
`;
