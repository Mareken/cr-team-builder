import React, { useState, useEffect } from 'react';

import Icon from '@mdi/react';
import { mdiGithub, mdiLogin } from '@mdi/js';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import useAuth from '../../context/AuthContext';
import useTeam from '../../context/TeamContext';
import useWindowSize from '../../utils/hooks/useWindowSize';

import logo from '../../assets/images/logo.svg';

import { Container, Actions, LogoContainer, Logo, LoginBtn, UserArea, ProfilePic, UserPopup, PopupAction, UserPopupContainer, UserPopupOverlay, GithubBtn } from './styles';

const Header: React.FC = () => {
  const history = useHistory();
  const { currentUser, signout } = useAuth();
  const size = useWindowSize();
  const { clearTeam } = useTeam();
  const { t } = useTranslation();
  const [ localUserImg, setLocalUserImg ] = useState('01');
  const [ showPopup, setShowPopup ] = useState(false);

  useEffect(() => {
    const handleKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape' && document.querySelector('.popup.open')) {
        closeUserPopup();
      }
    }

    const handleScroll = () => {
      if (document.querySelector('.popup.open')) {
        closeUserPopup();
      }
    }
    
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('scroll', handleScroll, { passive: true, capture: false });
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  useEffect(() => {
    if (!currentUser?.photoURL) {
      let randomInteger = '' + Math.floor(Math.random() * 50);
      randomInteger = ('0' + randomInteger).slice(-2);
  
      import(`../../assets/images/user_pics/${randomInteger}.svg`).then(img => setLocalUserImg(img.default));
    }
  }, [currentUser?.photoURL]);

  const openLogin = () => {
    history.push('/login');
  }

  const handleLogout = () => {
    setShowPopup(false);
    
    setTimeout(() => {
      const status = window.confirm('Tem certeza que deseja sair?');
  
      if (status) {
        signout();
        clearTeam();

        history.replace('/');
      }
    }, 50);
  }

  const openUserPopup = () => {
    setShowPopup(true);
  }

  const closeUserPopup = () => {
    setShowPopup(false);
  }

  return (
    <Container
      className='noSelect'
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <LogoContainer onClick={() => history.push('/')}>
        <Logo bg={logo} />
      </LogoContainer>
      <Actions>
        {
          currentUser ? (
            <UserArea>
              <ProfilePic src={currentUser.photoURL || localUserImg} onClick={openUserPopup} />
              <UserPopupContainer className={showPopup ? 'popup open' : 'popup'}>
                <UserPopupOverlay onClick={closeUserPopup} />

                <UserPopup>
                  <PopupAction onClick={handleLogout}>{t('popup.logout')}</PopupAction>
                </UserPopup>
              </UserPopupContainer>
            </UserArea>
          ) : (
            <UserArea>
              <LoginBtn onClick={openLogin}>
                {
                  size.width > 1024 ? (
                    t('login')
                  ) : (
                    <Icon
                      path={mdiLogin}
                      size='24px'
                      color='#fff'
                    />
                  )
                }
              </LoginBtn>
            </UserArea>
          )
        }
        <GithubBtn
          href='https://github.com/Mareken/cr-team-builder'
          title='Ir para repositório do GitHub'
          target='_blank'
          rel='noreferrer'
        >
          <Icon
            path={mdiGithub}
            size='24px'
            color='#fff'
          />
        </GithubBtn>
      </Actions>
    </Container>
  )
}

export default Header;