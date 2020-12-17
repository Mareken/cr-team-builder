import styled from 'styled-components';

const colors = [ '#fff', '#5BB2C4', '#3392E0', '#D92BD2', '#DFB460' ];

export const Container = styled.div`
  height: 70px;
  border: 2px solid transparent;
  border-radius: 2px;
  background: #344852;
  cursor: pointer;
  border-color: ${props => colors[props.cost - 1]};
  transition: all .1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transform: ${props => props.board ? 'translateY(-2px) scaleX(1.05)' : 'none'};

  @media screen and (max-width: 1200px) {
    height: 50px;
  }
`;

export const FeaturedBadge = styled.div`
  position: absolute;
  top: -1px;
  right: -1px;
  border-radius: 0 2px 0 2px;
  background: ${props => colors[props.cost - 1]};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 21px;
  height: 21px;
  z-index: 2;
`;

export const Thumb = styled.div`
  width: ${props => props.isSvg ? '100%' : '80%'};
  height: ${props => props.isSvg ? '100%' : '80%'};
  background: ${props => `url(${props.bg})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: ${props => props.isSvg ? 5 : 1};
`;
