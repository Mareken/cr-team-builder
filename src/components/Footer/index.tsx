import React from 'react';

import { useTranslation } from 'react-i18next';
import Icon from '@mdi/react';
import { mdiTranslate } from '@mdi/js';

import heartIcon from '../../assets/images/heart_icon.svg';

import { Container, Row, FooterMessage, CopyrightMessage, SelectLanguage, Option, HeartIcon } from './styles';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(evt.target.value);
  }

  return (
    <Container
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <Row>
        <Icon
          path={mdiTranslate}
          size='24px'
          color='#fff'
        />
        <SelectLanguage onChange={handleChangeLanguage}>
          <Option value='pt-BR'>Português</Option>
          <Option value='en'>English</Option>
          <Option value='es'>Español</Option>
          <Option value='ind'>Bahasa Indonesia</Option>
        </SelectLanguage>
      </Row>
      <FooterMessage>Criado com <HeartIcon bg={heartIcon} /> por&nbsp;<a href='https://github.com/Mareken' target='_blank' rel='noreferrer'>Gabriel Antônio</a></FooterMessage>
      <CopyrightMessage>{t('copyrightMessage')}</CopyrightMessage>
    </Container>
  );
}

export default Footer;