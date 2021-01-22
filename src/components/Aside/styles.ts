import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 202px;
`;

export const BtnClearTeam = styled.button`
  color: #fff;
  border: 1px solid #344852;
  width: 150px;
  height: 40px;
  text-align: center;
  border-radius: 4px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: all .15s ease;
  background: transparent;

  &:hover {
    border-color: #0087C2;
  }
`;

export const BtnSaveTeam = styled.button`
  color: #fff;
  background: #344852;
  width: 150px;
  height: 40px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all .15s ease;
  margin-bottom: 16px;
  border: 1px solid #344852;

  &:hover {
    background: #22333B;
    border-color: #22333B;
  }
`;

export const BtnShare = styled.button`
  color: #fff;
  background: #0087C2;
  width: 150px;
  height: 40px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all .15s ease;
  border: 1px solid #0087C2;

  &:hover {
    background: #006A98;
    border-color: #006A98;
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
  padding: 24px;
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
      background: rgba(0, 0, 0, .6);
    }

    ${Dialog} {
      pointer-events: auto;
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const DialogLinkContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const DialogLinkIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px 0 0 5px;
  background: #22333B;
`;

export const DialogLinkInput = styled.input`
  height: 50px;
  border: none;
  background: #22333B;
  flex: 1;
  color: #fff;
`;

export const DialogLinkBtnCopy = styled.button`
  text-align: center;
  color: #0087C2;
  font-weight: 600;
  height: 50px;
  padding: 0 16px;
  background: #22333B;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: all .15s ease;

  &:hover {
    background: #344852;
  }
`;

export const DialogLoginAlert = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DialogLoginAlertText = styled.p`
  color: #b1bec7;
`;

export const DialogLoginAlertBtn = styled.button`
  text-align: center;
  color: #0087C2;
  font-weight: 600;
  height: 40px;
  padding: 0 16px;
  background: #22333B;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 16px;
  transition: all .15s ease;

  &:hover {
    background: #344852;
  }
`;