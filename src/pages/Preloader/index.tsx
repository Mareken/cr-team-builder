import React from 'react';

import Lottie from 'react-lottie';

import animationData from '../../assets/lotties/preloader.json';

import { Container, LoadingText } from './styles';

const Preloader: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const variants = {
    initial: { opacity: 0, scale: .97, transition: { duration: .15, easing: 'cubic-bezier(.785,.135,.15,.86)' } },
    visible: { opacity: 1, scale: 1, transition: { duration: .15, easing: 'cubic-bezier(.785,.135,.15,.86)' } }
  }

  return (
    <Container
      variants={variants}
      initial='initial'
      animate='visible'
      exit='initial'
      className='noSelect'
    >
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
        width='20%'
        height='auto'
      />
      <LoadingText>Carregando...</LoadingText>
    </Container>
  );
}

export default Preloader;