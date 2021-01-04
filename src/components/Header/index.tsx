import React from 'react';

import { useHistory } from 'react-router-dom';
import logo from '../../assets/images/logo_full.png';
import useAuth from '../../context/AuthContext';

import { Container, Logo, Actions, SignupBtn, LoginBtn } from './styles';

const Header: React.FC = () => {
  const history = useHistory();
  const { currentUser } = useAuth();

  const openSignup = () => {
    history.replace('/signup');
  }

  const openLogin = () => {
    history.replace('/login');
  }

  const goHome = () => {
    history.replace('/');
  }

  return (
    <Container>
      <Logo src={logo} className='noSelect' onClick={goHome} />
      <Actions>
        {
          currentUser ? (
            <div>Logado</div>
          ) : (
            <>
              <SignupBtn onClick={openSignup}>Cadastrar</SignupBtn>
              <LoginBtn onClick={openLogin}>Entrar</LoginBtn>
            </>
          )
        }
      </Actions>
    </Container>
  );
}

export default Header;