import styled from 'styled-components';

const colors = [ '#fff', '#5BB2C4', '#3392E0', '#D92BD2', '#DFB460' ];

interface Props {
  cost: number;
  board: boolean;
  isSvg: boolean;
  bg: string;
  level: number;
}

export const LevelContainer = styled.div<Pick<Props, 'level'>>`
  z-index: 5;
  position: absolute;
  top: 0;
  left: 50%;  
  transform: translate(-50%, -65%);
  width: 100%;
  opacity: 1;
  pointer-events: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  opacity: ${props => props.level > 1 ? 1 : 0};

  > div {
    align-self: center;
    width: 100%;
    height: 100%;
    pointer-events: none !important;

    > div {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none !important;

      > span {
        text-shadow: 0 2px 5px rgba(0,0,0,.8);
        display: flex !important;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100%;
        padding: 0 3px;
        flex: 1;
        pointer-events: ${props => props.level > 1 ? 'auto' : 'none'} !important;

        &:first-of-type {
          transform: translateX(3px);
        }

        &:last-of-type {
          transform: translateX(-3px);
        }
      }
    }
  }
`;

export const Container = styled.div<Pick<Props, 'cost' | 'board'>>`
  height: 70px;
  border: 2px solid transparent;
  border-radius: 4px;
  background: #344852;
  cursor: pointer;
  border-color: ${props => colors[props.cost - 1]};
  transition: all .1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transform: ${props => props.board ? 'translateY(-2px) scaleX(1.05)' : 'none'};

  &:hover {
    ${LevelContainer} {
      opacity: 1;

      > div > div > span {
        pointer-events: auto !important;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    height: 50px;
  }
`;

export const FeaturedBadge = styled.div<Pick<Props, 'cost'>>`
  position: absolute;
  bottom: -2px;
  right: -1px;
  border-radius: 4px 0 0 2px;
  background: ${props => colors[props.cost - 1]};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 21px;
  height: 21px;
  z-index: 2;
`;

export const Thumb = styled.div<Pick<Props, 'bg' | 'isSvg'>>`
  width: ${props => props.isSvg ? '100%' : '80%'};
  height: ${props => props.isSvg ? '100%' : '80%'};
  background: ${props => `url(${props.bg})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: ${props => props.isSvg ? 5 : 1};
`;