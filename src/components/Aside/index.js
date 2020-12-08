import React from 'react';

import { Container, BtnClearTeam, BtnShare } from './styles';

function Aside () {
  return (
    <Container>
      <BtnClearTeam>Limpar Time</BtnClearTeam>
      <BtnShare>Compartilhar</BtnShare>
    </Container>
  );
}

export default Aside;