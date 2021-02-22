import styled from 'styled-components';
import { rgba } from 'polished';
import { motion } from 'framer-motion';

interface Props {
  bg: string;
}

export const Container = styled(motion.header)`
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  background: ${props => rgba(props.theme.black, .7)};
  padding: 0 80px;
  justify-content: space-between;
  transition: all .3s ease-out;
  margin-bottom: 32px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  border-bottom: 1px solid ${props => props.theme.gray};
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  -moz-backdrop-filter: blur(6px);
  -ms-backdrop-filter: blur(6px);

  @media screen and (max-width: 1024px) {
    padding: 0 20px;
    height: 80px;
  }
`;

export const LogoContainer = styled.div`
  cursor: pointer;
`;

export const Logo = styled.div<Props>`
  width: 90px;
  height: 30px;
  background: ${props => `url(${props.bg})`};
  background-size: contain;
  background-position: left;
`;

export const Actions = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const LoginBtn = styled.button`
  color: #fff;
  background: ${props => props.theme.blue};
  padding: 0 16px;
  height: 40px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all .15s ease;

  &:hover {
    background: ${props => props.theme.darkBlue};
  }

  @media screen and (max-width: 1024px) {
    width: 60px;
    padding-top: 5px;
  }
`;

export const UserArea = styled.div`
  position: relative;
`;

export const ProfilePic = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 0 1px ${props => props.theme.gray}, 0 0 0 1px ${props => props.theme.gray} inset;
  margin-top: 5px;
`;

export const UserPopup = styled.div`
  position: absolute;
  right: 136px;
  top: 52px;
  background: ${props => props.theme.black};
  border: 1px solid ${props => props.theme.gray};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  transition: all .15s cubic-bezier(.785,.135,.15,.86);
  pointer-events: none;
  opacity: 0;
`;

export const UserPopupOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: transparent;
  cursor: auto;
  position: fixed;
`;

export const PopupAction = styled.button`
  padding: 0 32px 0 16px;
  height: 40px;
  background: ${props => props.theme.black};
  color: #fff;
  cursor: pointer;
  text-align: left;
  transition: all .05s ease;

  &:hover {
    background: ${props => props.theme.gray};
  }
`;

export const UserPopupContainer = styled.div`
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

    ${UserPopup} {
      pointer-events: auto;
      opacity: 1;
    }
  }
`;

export const GithubBtn = styled.a`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${props => props.theme.black};
  border: 1px solid ${props => props.theme.gray};
  border-radius: 5px;
  transition: all .15s ease;
  margin-left: 16px;

  &:hover {
    border-color: ${props => props.theme.blue};
  }
`;