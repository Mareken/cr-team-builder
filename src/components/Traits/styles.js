import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Trait = styled.div`
  background: #22333B;
  border: 1px solid #425C68;
  border-radius: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 200px;
  padding: 8px;
  margin-bottom: 12px;
  position: relative;

  &:hover {
    > div ~ div {
      opacity: 1;
    }
  }
`;

export const TraitImage = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
  margin-right: 8px;
  filter: ${props => props.active ? 'none' : 'grayscale(1)'};
  pointer-events: none;
`;

export const TraitBadgeNumber = styled.p`
  color: #DFB460;
  font-size: 14px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #425C68;
  border-radius: 2px;
  margin-right: 8px;
  pointer-events: none;
`;

export const TraitContent = styled.div`
  pointer-events: none;
`;

export const TraitName = styled.p`
  color: ${props => props.active ? '#fff' : '#B0B0B0'};
  pointer-events: none;
`;

export const TraitRatio = styled.p`
  color: #DFB460;
  font-size: 14px;
  pointer-events: none;
`;

export const EmptyState = styled.div`
  width: 200px;
  padding: 16px 0;
  text-align: center;
  background: #22333B;
  border: 1px solid #425C68;
  border-radius: 2px;
`;

export const EmptyStateText = styled.p`
  color: #B0B0B0;
`;

export const Popup = styled.div`
  position: absolute;
  right: -405px;
  top: 0;
  background: #344852;
  border-radius: 2px;
  width: 400px;
  padding: 16px;
  border: 2px solid #425C68;
  z-index: 15;
  cursor: default;
  opacity: 0;
  transition: all .05s ease;
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    top: 48px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #425C68;
  }
`;

export const PopupTitle = styled.p`
  color: #fff;
  font-family: 'SpaceGrotesk Bold';
  margin-bottom: 24px;
`;

export const PopupDescriptionPre = styled.p`
  color: #fff;
  line-height: 1.5rem;
  white-space: pre-wrap;
`;

export const PopupDescriptionAfter = styled.p`
  color: #fff;
  line-height: 1.5rem;
  white-space: pre-wrap;
`;

export const PopupStages = styled.div`
  margin: 16px 0;
`;

export const Stage = styled.div`
  display: flex;
  align-items: ${props => props.multiline ? 'flex-start' : 'center'};
  margin-bottom: 8px;

  &:last-of-type {
    margin-bottom: 0;
  }

  > p {
    &:first-of-type {
      background: ${props => props.active ? '#0087C2' : '#344852'};
      border-color: ${props => props.active ? '#0087C2' : '#B0B0B0'};
    }

    &:last-of-type {
      color: ${props => props.active ? '#fff' : '#B0B0B0'};
      font-family: ${props => props.active ? 'SpaceGrotesk Bold' : 'inherit'};
    }
  }
`;

export const StageNumber = styled.p`
  border: 1px solid transparent;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-right: 8px;
  text-align: center;
`;

export const StageDescription = styled.p`
  color: #fff;
  flex: 1;
`;