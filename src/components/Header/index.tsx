import React from 'react';

import logo from '../../assets/images/logo_full.png';

import { Container, Logo } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={logo} className='noSelect' />
    </Container>
  );
}

export default Header;