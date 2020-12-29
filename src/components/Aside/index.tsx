import React, { useState } from 'react';

import useTeam from '../../context/TeamContext';

import { Container, BtnClearTeam, BtnShare, Dialog, DialogTitle, DialogText, DialogFooter, DialogBtn, DialogContainer, DialogOverlay } from './styles';

const Aside: React.FC = () => {
  const { clearTeam } = useTeam();
  const [ dialogOpen, setDialogOpen ] = useState(true);

  const openDialog = () => {
    setDialogOpen(true);
    document.body.style.overflowY = 'hidden';
  }

  const closeDialog = () => {
    setDialogOpen(false);

    setTimeout(() => {
      document.body.style.overflowY = 'auto';
    }, 150);
  }

  return (
    <Container>
      <BtnClearTeam onClick={clearTeam}>Limpar Time</BtnClearTeam>
      <BtnShare onClick={openDialog}>Compartilhar</BtnShare>

      <DialogContainer className={dialogOpen ? 'dialog open' : 'dialog'}>
        <DialogOverlay onClick={closeDialog} />
        
        <Dialog>
          <DialogTitle>Calma aí</DialogTitle>
          <DialogText>Essa funcionalidade vai ser implementada em breve 😉</DialogText>
          <DialogFooter>
            <DialogBtn onClick={closeDialog}>Ok</DialogBtn>
          </DialogFooter>
        </Dialog>
      </DialogContainer>

    </Container>
  );
}

export default Aside;