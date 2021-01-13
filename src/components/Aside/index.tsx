import React, { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import useTeam from '../../context/TeamContext';
import useAuth from '../../context/AuthContext';

import { Container, BtnClearTeam, BtnSaveTeam, BtnShare, Dialog, DialogTitle, DialogText, DialogFooter, DialogBtn, DialogContainer, DialogOverlay } from './styles';

const Aside: React.FC = () => {
  const { clearTeam } = useTeam();
  const { currentUser } = useAuth();
  const { t } = useTranslation();
  const [ dialogOpen, setDialogOpen ] = useState(false);

  useEffect(() => {
    const handleKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape' && document.querySelector('.dialog.open')) {
        closeDialog();
      }
    }

    const handleScroll = () => {
      if (document.querySelector('.dialog.open')) {
        closeDialog();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('scroll', handleScroll, { passive: true, capture: false });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const openDialog = () => {
    setDialogOpen(true);
  }

  const closeDialog = () => {
    setDialogOpen(false);
  }

  return (
    <Container>
      <BtnClearTeam onClick={clearTeam}>{t('aside.clearTeam')}</BtnClearTeam>
      { currentUser && <BtnSaveTeam>{t('aside.saveTeam')}</BtnSaveTeam> }
      <BtnShare onClick={openDialog}>{t('aside.share')}</BtnShare>

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