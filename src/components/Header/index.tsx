import React, { useState, useEffect } from 'react';

import Icon from '@mdi/react';
import { mdiLogin, mdiAccountPlus } from '@mdi/js';
import { useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/images/logo_full.png';
import useAuth from '../../context/AuthContext';
import useTeam from '../../context/TeamContext';
import useWindowSize from '../../utils/hooks/useWindowSize';

import { Container, Logo, Actions, SignupBtn, LoginBtn, UserArea, ProfilePic, SubHeader, Tab, UserPopup, PopupAction, UserPopupContainer, UserPopupOverlay } from './styles';

const Header: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const { currentUser, signout } = useAuth();
  const size = useWindowSize();
  const { clearTeam } = useTeam();
  const { t } = useTranslation();
  const [ activeTab, setActiveTab ] = useState(0);
  const [ localUserImg, setLocalUserImg ] = useState('01');
  const [ showPopup, setShowPopup ] = useState(false);
  const [ currPathname, ] = useState(location.pathname);

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

  useEffect(() => {
    if (location.pathname === '/' && currentUser) {
      setActiveTab(0);
    }
    else if (location.pathname === `/${currentUser?.uid}/my-comps` && currentUser) {
      setActiveTab(1);
    }
  }, [location.pathname, currentUser]);

  const openSignup = () => {
    history.push('/signup');
  }

  const openLogin = () => {
    history.push('/login');
  }

  const handleTabClick = (index: number) => {
    setActiveTab(index);

    if (index === 0) {
      history.push(currPathname);
    }
    else {
      history.push(`/${currentUser!.uid}/my-comps`);
    }
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
    <Container isLogged={currentUser ? true : false}>
      <Logo
        src={logo}
        className='noSelect'
        onClick={() => history.push('/')}
      />
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
              <SignupBtn onClick={openSignup}>
                {
                  size.width > 1024 ? (
                    t('register')
                  ) : (
                    <Icon
                      path={mdiAccountPlus}
                      size='24px'
                      color='#fff'
                    />
                  )
                }
              </SignupBtn>
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
      </Actions>
      {
        currentUser && (
          <SubHeader className='noSelect'>
            <Tab
              className={activeTab === 0 ? 'active' : ''}
              onClick={() => handleTabClick(0)}
            >
              {t('subheader.tabOne')}
            </Tab>
            <Tab
              className={activeTab === 1 ? 'active' : ''}
              onClick={() => handleTabClick(1)}
            >
              {t('subheader.tabTwo')}
            </Tab>
          </SubHeader>
        )
      }
    </Container>
  )
}

export default Header;