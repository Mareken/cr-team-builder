import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 202px;
`;

export const BtnClearTeam = styled.button`
  color: #fff;
  border: 1px solid ${props => props.theme.gray};
  width: 150px;
  height: 40px;
  text-align: center;
  border-radius: 4px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: all .15s ease;
  background: transparent;

  &:hover {
    border-color: ${props => props.theme.blue};
  }
`;

export const BtnSaveTeam = styled.button`
  color: #fff;
  background: ${props => props.theme.gray};
  width: 150px;
  height: 40px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all .15s ease;
  margin-bottom: 16px;
  border: 1px solid ${props => props.theme.gray};

  &:hover {
    background: ${props => props.theme.darkGray};
    border-color: ${props => props.theme.darkGray};
  }
`;

export const BtnShare = styled.button`
  color: #fff;
  background: ${props => props.theme.blue};
  width: 150px;
  height: 40px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all .15s ease;
  border: 1px solid ${props => props.theme.blue};

  &:hover {
    background: ${props => props.theme.darkBlue};
    border-color: ${props => props.theme.darkBlue};
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
  background: ${props => props.theme.black};
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
  background: ${props => props.theme.darkGray};
`;

export const DialogLinkInput = styled.input`
  height: 50px;
  border: none;
  background: ${props => props.theme.darkGray};
  flex: 1;
  color: #fff;
`;

export const DialogLinkBtnCopy = styled.button`
  text-align: center;
  color: ${props => props.theme.blue};
  font-weight: 600;
  height: 50px;
  padding: 0 16px;
  background: ${props => props.theme.darkGray};
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: all .15s ease;

  &:hover {
    background: ${props => props.theme.gray};
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
  color: ${props => props.theme.blue};
  font-weight: 600;
  height: 40px;
  padding: 0 16px;
  background: ${props => props.theme.darkGray};
  border-radius: 5px;
  cursor: pointer;
  margin-top: 16px;
  transition: all .15s ease;

  &:hover {
    background: ${props => props.theme.gray};
  }
`;