import React, { useState, useEffect } from 'react';

import Icon from '@mdi/react';
import { mdiLinkVariant } from '@mdi/js';
import { useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import qs from 'query-string';
import useTeam from '../../context/TeamContext';
import useAuth from '../../context/AuthContext';

import { Container, BtnClearTeam, BtnSaveTeam, BtnShare, Dialog, DialogTitle, DialogContainer, DialogOverlay, DialogLinkContainer, DialogLinkIcon, DialogLinkInput, DialogLinkBtnCopy, DialogLoginAlert, DialogLoginAlertText, DialogLoginAlertBtn } from './styles';

const Aside: React.FC = () => {
  const { clearTeam, saveTeam, loading, team } = useTeam();
  const { currentUser } = useAuth();
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();
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
    if (team.comp.some(item => item)) {
      setDialogOpen(true);
    }
    else {
      alert('O time está vazio 😐');
    } 
  }

  const closeDialog = () => {
    setDialogOpen(false);
  }

  const handleSaveTeam = () => {
    if (team.comp.some(item => item)) {
      saveTeam(currentUser!.uid);
  
      const { u, t } = qs.parse(location.search);
  
      if ((!t || !u) && currentUser) {
        setUrl(`${window.location.href}?u=${currentUser.uid}&t=${team.id}`);
        history.push(`/?u=${currentUser.uid}&t=${team.id}`);
      }
    }
    else {
      alert('O time está vazio 😐');
    }
  }

  const copyToClipboard = () => {
    const { u, t } = qs.parse(location.search);

    if (u && t) {
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

  const handleShareTeam = () => {
    saveTeam(currentUser!.uid);
    copyToClipboard();
  }

  const handleClearTeam = () => {
    clearTeam();
    setUrl('/');
    history.push('/');
  }

  const saveToStorageAndRedirectToLogin = () => {
    localStorage.setItem('team', JSON.stringify(team));

    history.push('/login');
  }
  
  return (
    <Container className='noSelect'>
      <BtnClearTeam onClick={handleClearTeam}>{t('aside.clearTeam')}</BtnClearTeam>
      {
        currentUser && (
          <BtnSaveTeam
            onClick={handleSaveTeam}
            disabled={loading}
          >
            {loading ? 'Salvando...' : t('aside.saveTeam')}
          </BtnSaveTeam>
        )
      }
      <BtnShare onClick={openDialog}>{t('aside.share')}</BtnShare>

      <DialogContainer className={dialogOpen ? 'dialog open' : 'dialog'}>
        <DialogOverlay onClick={closeDialog} />
        
        <Dialog>
          {
            currentUser ? (
              <>
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
              </>
            ) : (
              <DialogLoginAlert>
                <DialogLoginAlertText>Faça login para compartilhar seu time</DialogLoginAlertText>
                <DialogLoginAlertBtn onClick={saveToStorageAndRedirectToLogin}>
                  Entrar
                </DialogLoginAlertBtn>
              </DialogLoginAlert>
            )
          }
        </Dialog>
      </DialogContainer>

    </Container>
  );
}

export default Aside;