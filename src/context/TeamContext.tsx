import React, { createContext, PropsWithChildren, useContext, useState } from 'react';

import { firestore, timestamp } from '../firebase';
import { uid } from '../utils/helpers';
import { Hero, TeamData, Team } from '../utils/types';

const TeamContext = createContext<TeamData>({} as TeamData);

const TeamProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [ team, setTeam ] = useState({ id: uid(), comp: Array(32).fill('') });
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState('');

  const addHero = (hero: Hero, position: number | undefined) => {
    const { comp } = { ...team };

    if (comp.every(item => item)) return;

    if (position) {
      comp[position] = {
        hero: hero,
        position: position,
        items: [],
        level: 1
      };
    }
    else {
      comp.some((item, index) => {
        if (!item) {
          comp[index] = {
            hero: hero,
            position: index,
            items: [],
            level: 1
          };
    
          return true;
        }
        else {
          return false;
        }
      });
    }
    
    setTeam({ ...team, comp });
  };

  const removeHero = (hero: Hero, position: number) => {
    const { comp } = { ...team };
    const pos = comp.findIndex(item => item.position === position && item.hero.id === hero.id);
    
    comp[pos] = '';

    setTeam({ ...team, comp });
  }

  const swapPositions = (initialPos: number, finalPos: number) => {
    if (initialPos === finalPos) return;
    
    const { comp } = { ...team };
    
    comp[initialPos].position = finalPos;

    if (comp[finalPos]) {
      comp[finalPos].position = initialPos;
    }
    
    [ comp[initialPos], comp[finalPos] ] = [ comp[finalPos], comp[initialPos] ];
    
    setTeam({ ...team, comp });
  };

  const clearTeam = () => {
    setTeam({ id: uid(), comp: Array(32).fill('') });
  }

  const saveTeam = async (userId: string, localTeam?: { id: string, comp: Team[]; }) => {
    if (localTeam) {
      setTeam(localTeam);
    }

    if (team.comp.some(item => item)) {
      setLoading(true);

      const userRef = firestore.collection(`users/${userId}/teams`).doc(team.id);
      const status = await userRef.get();

      if (status.exists) {
        try {
          await userRef.update({
            comp: team.comp,
            updatedAt: timestamp()
          });
          
          setLoading(false);
          setError('');
        }
        catch (err) {
          console.error(`Erro ao atualizar time ${err}`);
        }
      }
      else {
        try {
          await userRef.set({
            teamId: team.id,
            comp: team.comp,
            createdAt: timestamp()
          });
          
          setLoading(false);
          setError('');
        }
        catch (err) {
          console.error(`Erro ao criar time ${err}`);
        }
      }
    }
  }

  const fetchTeam = async (userId: string | string[], teamId: string | string[]) => {
    const tId = Array.isArray(teamId) ? teamId[0] : teamId;
    const userRef = firestore.collection(`users/${userId}/teams`).doc(tId);

    const status = await userRef.get();

    if (status.exists) {
      setTeam({
        id: tId,
        comp: status.data()!.comp
      })

      return true;
    }
    else {
      return false;
    }
  }

  const changeHeroLevel = (position: number, level: number) => {
    const { comp } = { ...team };
    const pos = comp.findIndex(item => item.position === position);
    
    comp[pos] = {
      ...comp[pos],
      level
    }

    setTeam({ ...team, comp });
  }

  return (
    <TeamContext.Provider value={{ team, loading, error, addHero, removeHero, clearTeam, saveTeam, fetchTeam, swapPositions, changeHeroLevel }}>
      { children }
    </TeamContext.Provider>
  )
}

const useTeam = () => {
  const context = useContext(TeamContext);

  if (!context)
    throw new Error('useTeam must be used within a TeamProvider');

  return context;
}

export { TeamProvider, useTeam as default };