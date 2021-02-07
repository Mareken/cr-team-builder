import styled from 'styled-components';

const colors = [ '#fff', '#4EB9DA', '#1581D3', '#9E22CF', '#E18E13' ];

interface Props {
  cost: number;
  board: boolean;
  bg: string;
  level: number;
}

export const Container = styled.div<Pick<Props, 'cost' | 'board'>>`
  height: 70px;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  border-color: ${props => colors[props.cost - 1]};
  transition: all .1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transform: ${props => props.board ? 'translateY(-2px) scaleX(1.05)' : 'none'};
  
  &:hover {
    > div + div {
      opacity: 1;
      z-index: 25;
    }
  }

  @media screen and (max-width: 1200px) {
    height: 50px;
  }
`;

export const FeaturedBadge = styled.div<Pick<Props, 'cost'>>`
  position: absolute;
  bottom: -1px;
  right: -1px;
  border-radius: 4px 0 1px 0;
  background: ${props => colors[props.cost - 1]};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 21px;
  height: 21px;
  z-index: 2;
`;

export const Thumb = styled.div<Pick<Props, 'bg'>>`
  width: 100%;
  height: 100%;
  background: ${props => `url(${props.bg})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

export const HeroTooltip = styled.div`
  position: absolute;
  top: -100%;
  left: 50%;
  background: #344852;
  border-radius: 4px;
  border: 1px solid #425C68;
  z-index: 15;
  cursor: default;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition: all .05s ease;
  z-index: 20;
  font-size: 14px;
  min-width: 250px;
  pointer-events: none;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 8px 16px;
  position: relative;
  
  &:first-of-type {
    border-bottom: 1px solid #425C68;
    padding-right: 60px;
  }

  &:last-of-type {
    flex-wrap: wrap;
  }
`;

export const TooltipThumb = styled.div<Pick<Props, 'bg'>>`
  flex: 0 0 32px;
  height: 32px;
  background: ${props => `url(${props.bg})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const TooltipName = styled.p<Pick<Props, 'cost'>>`
  color: ${props => colors[props.cost - 1]};
  margin-left: 8px;
  display: block;
  font-family: 'SpaceGrotesk Bold';
`;

export const TooltipTrait = styled.p`
  color: #fff;
  margin-right: 4px;

  &:not(:last-of-type) {
    &::after {
      content: '•';
      display: inline-block;
      margin-left: 4px;
      color: #425C68;
    }
  }

  &::first-letter {
    text-transform: capitalize;
  }
`;

export const TooltipCost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #425C68;
  width: 40px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  border-top-right-radius: 4px;
`;

export const TooltipCostIcon = styled.div<Pick<Props, 'bg'>>`
  width: 14px;
  height: 16px;
  background: ${props => `url(${props.bg})`};
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  margin-right: 4px;
`;

export const TooltipCostText = styled.p`
  color: #fff;
`;