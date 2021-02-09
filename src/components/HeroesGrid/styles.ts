import styled from 'styled-components';

interface Props {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 64px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    width: 80%;
    justify-content: center;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-right: 16px;

  @media screen and (max-width: 1024px) {
    margin: 0;
  }
`;

export const OrderBtn = styled.button<Props>`
  border-radius: 4px;
  border: none;
  background: ${props => props.selected ? '#0087C2' : '#22333B'};
  padding: 8px 12px;
  color: ${props => props.selected ? '#fff' : '#b1bec7'};
  margin-left: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .15s ease;

  &:hover {
    filter: contrast(80%);
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SearchInput = styled.input`
  background: #0A0908;
  border: none;
  padding: 10px 0;
  color: #fff;
  margin-left: 8px;
  flex: 1;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 70px);
  grid-gap: 8px;
  gap: 8px;
  margin-top: 16px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(5, 60px);
    grid-gap: 8px;
    gap: 8px;
  }
`;