import React, { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'query-string';
import useTeam from '../../context/TeamContext';
import useWindowSize from '../../utils/hooks/useWindowSize';

import Preloader from '../Preloader';
import Board from '../../components/Board';
import HeroesGrid from '../../components/HeroesGrid';
import Traits from '../../components/Traits';
import Aside from '../../components/Aside';

import { Center, Main } from './styles';

const Initial: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const { fetchTeam, clearTeam } = useTeam();
  const size = useWindowSize();
  const [ mount, setMount ] = useState(false);

  const options = {
    enableMouseEvents: true
  }

  useEffect(() => {
    if (!mount) {
      const { u, t } = qs.parse(location.search);

      if (u && t) {
        const fetch = async () => {
          await fetchTeam(u, t);
        }

        fetch();
      }
      else {
        clearTeam();
        history.push('/');
      }

      setTimeout(() => {
        setMount(true);
      }, 1000);
    }

    return () => setMount(false);
  }, [location.pathname]);

  const variants = {
    initial: { opacity: 0, scale: 1, y: 50, transition: { duration: .15, easing: 'cubic-bezier(.785,.135,.15,.86)' } },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: .15, easing: 'cubic-bezier(.785,.135,.15,.86)' } },
    hidden: { opacity: 0, scale: 0.97, y: 0, transition: { duration: .15, easing: 'cubic-bezier(.785,.135,.15,.86)' } },
  }

  return (
    <DndProvider backend={size.width < 1024 ? TouchBackend : HTML5Backend} options={options}>
      <AnimatePresence exitBeforeEnter={true}>
        {
          !mount ? (
            <Preloader />
          ) : (
            <Main
              variants={variants}
              initial='initial'
              animate='visible'
              exit='initial'
            >
              <Traits />
              <Center>
                <Board />
                <HeroesGrid />
              </Center>
              <Aside />
            </Main>
          )
        }
      </AnimatePresence>
    </DndProvider>
  );
}

export default Initial;