import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 360px) {
    position: absolute;
    right: 40px;
    top: 10px;
  }

  @media screen and (min-width: 1024px) {
    position: initial;
  }
`;

export const BtnClearTeam = styled.button`
  color: #fff;
  border: 1px solid #344852;
  width: 130px;
  height: 40px;
  text-align: center;
  border-radius: 2px;
  margin-right: 8px;
  cursor: pointer;
  transition: all .15s ease;

  &:hover {
    border-color: #0087C2;
  }

  @media screen and (min-width: 360px) {
    background: #22333B;
  }

  @media screen and (min-width: 1024px) {
    background: #0A0908;
  }
`;

export const BtnShare = styled.button`
  color: #fff;
  background: #0087C2;
  width: 130px;
  height: 40px;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
  transition: all .15s ease;

  &:hover {
    background: #006A98;
  }
`;

export const DialogOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(52, 72, 82, 0);
  transition: all .15s ease;
`;

export const Dialog = styled.div`
  position: absolute;
  background: #0A0908;
  padding: 24px 16px 16px 24px;
  width: 300px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  pointer-events: none;
  transform: scale(.95);
  transition: all .3s cubic-bezier(.785,.135,.15,.86);
`;

export const DialogTitle = styled.p`
  color: #fff;
`;

export const DialogText = styled.p`
  color: #B0B0B0;
  margin: 8px 0;
`;

export const DialogFooter = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
`;

export const DialogBtn = styled.button`
  background: #0A0908;
  transition: all .3s ease-in-out;
  font-weight: 600;
  text-transform: uppercase;
  color: #0087C2;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: rgba(0, 135, 194, .2);
  }
`;

export const DialogContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 55;
  pointer-events: none;
  
  &.open {
    pointer-events: auto;

    ${DialogOverlay} {
      background: rgba(0, 0, 0, .5);
    }

    ${Dialog} {
      pointer-events: auto;
      opacity: 1;
      transform: scale(1);
    }
  }
`;