import React, { useState, useEffect } from 'react';

import Icon from '@mdi/react';
import { mdiLinkVariant } from '@mdi/js';
import { useHistory, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useTeam from '../../context/TeamContext';
import useAuth from '../../context/AuthContext';

import { Container, BtnClearTeam, BtnSaveTeam, BtnShare, Dialog, DialogTitle, DialogContainer, DialogOverlay, DialogLinkContainer, DialogLinkIcon, DialogLinkInput, DialogLinkBtnCopy } from './styles';

const Aside: React.FC = () => {
  const { clearTeam, saveTeam, loading, team } = useTeam();
  const { currentUser } = useAuth();
  const { t } = useTranslation();
  const history = useHistory();
  const { teamId } = useParams<{ teamId: string | undefined }>();
  const [ dialogOpen, setDialogOpen ] = useState(false);
  const [ url, setUrl ] = useState(window.location.href);
  const [ copying, setCopying ] = useState(false);

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

  const handleSaveTeam = () => {
    saveTeam(currentUser!.uid);

    if (!teamId) {
      setUrl(`${window.location.href}/${team.id}`);
      history.replace(`/${team.id}`);
    }
  }

  const handleShareTeam = () => {
    if (currentUser?.uid) {
      handleSaveTeam();
      copyToClipboard();
    }
  }

  const copyToClipboard = () => {
    if (teamId) {
      setCopying(true);

      const el = document.createElement('textarea');
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);

      setTimeout(() => {
        setCopying(false);
      }, 500);
    }
  }
  
  return (
    <Container>
      <BtnClearTeam onClick={clearTeam}>{t('aside.clearTeam')}</BtnClearTeam>
      {
        currentUser && (
          <BtnSaveTeam
            onClick={handleSaveTeam}
            disabled={loading}
          >
            {loading ? 'Salvando' : t('aside.saveTeam')}
          </BtnSaveTeam>
        )
      }
      <BtnShare onClick={openDialog}>{t('aside.share')}</BtnShare>

      <DialogContainer className={dialogOpen ? 'dialog open' : 'dialog'}>
        <DialogOverlay onClick={closeDialog} />
        
        <Dialog>
          <DialogTitle>Compartilhar composição</DialogTitle>
          <DialogLinkContainer>
            <DialogLinkIcon>
              <Icon
                path={mdiLinkVariant}
                size='24px'
                color='#b1bec7'
              />
            </DialogLinkIcon>
            <DialogLinkInput
              value={url}
              readOnly
            />
            <DialogLinkBtnCopy onClick={handleShareTeam} disabled={copying}> 
              { copying ? 'Copiando...' : 'Copiar' }
            </DialogLinkBtnCopy>
          </DialogLinkContainer>
        </Dialog>
      </DialogContainer>

    </Container>
  );
}

export default Aside;