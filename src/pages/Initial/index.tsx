import React, { useEffect, useState } from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'query-string';
import useTeam from '../../context/TeamContext';
import useWindowSize from '../../utils/hooks/useWindowSize';

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

      setMount(true);
    }

    return () => setMount(false);
  }, [location.pathname]);

  return (
    <DndProvider backend={size.width < 1024 ? TouchBackend : HTML5Backend} options={options}>
      <Main>
        <Traits />
        <Center>
          <Board />
          <HeroesGrid />
        </Center>
        <Aside />
      </Main>
    </DndProvider>
  );
}

export default Initial;