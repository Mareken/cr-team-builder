import React, { useEffect, useState } from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import useTeam from '../../context/TeamContext';
import useAuth from '../../context/AuthContext';

import Board from '../../components/Board';
import HeroesGrid from '../../components/HeroesGrid';
import Traits from '../../components/Traits';
import Aside from '../../components/Aside';

import { Center, Main } from './styles';

const Initial: React.FC = () => {
  const { teamId } = useParams<{ teamId: string | undefined }>();
  const history = useHistory();
  const location = useLocation();
  const { fetchTeam, clearTeam } = useTeam();
  const { currentUser } = useAuth();
  const [ mount, setMount ] = useState(false);

  useEffect(() => {
    if (!mount) {
      if (teamId) {
        const fetch = async () => {
          const status = await fetchTeam(currentUser!.uid, teamId);

          if (!status) {
            history.replace('/');
          }
        }

        fetch();
      }

      setMount(true);
    }

    return () => setMount(false);
  }, []);

  useEffect(() => {
    if (location.pathname === '/' && !teamId) {
      clearTeam();
    }
  }, [location.pathname, teamId, clearTeam]);

  return (
    <DndProvider backend={HTML5Backend}>
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