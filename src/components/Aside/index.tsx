import React from 'react';

import useTeam from '../../context/TeamContext';

import { Container, BtnClearTeam, BtnShare } from './styles';

const Aside: React.FC = () => {
  const { clearTeam } = useTeam();

  return (
    <Container>
      <BtnClearTeam onClick={clearTeam}>Limpar Time</BtnClearTeam>
      <BtnShare>Compartilhar</BtnShare>
    </Container>
  );
}

export default Aside;