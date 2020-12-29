import React, { useEffect, useState } from 'react';

import ContentLoader from 'react-content-loader'
import useTeam from '../../context/TeamContext';
import useTraits from '../../context/TraitsContext';
import useSearch from '../../context/SearchContext';
import { Trait } from '../../utils/types';


import { Container, TraitContainer, TraitImage, TraitBadgeNumber, TraitContent, TraitName, TraitRatio, EmptyState, EmptyStateText, Popup, PopupTitle, PopupDescriptionPre, PopupDescriptionAfter, PopupStages, Stage, StageNumber, StageDescription, TraitsSwitchContainer, TraitsSwitch, TraitsSwitchText } from './styles';

interface ReducedObj {
  [key: string]: number
}
const Traits: React.FC = () => {
  const { team } = useTeam();
  const { getTraitByName } = useTraits();
  const { searchValue, setSearchValue } = useSearch();
  const [ teamTraits, setTeamTraits ] = useState<Trait[]>([]);
  const [ hidePartials, setHidePartials ] = useState(false);

  useEffect(() => {
    if (teamTraits.length === 0) {
      setSearchValue('');
    };
  }, [teamTraits.length, setSearchValue]);

  useEffect(() => {
    if (team.length === 0 && teamTraits.length === 0) return;

    if (teamTraits.length === 0) setHidePartials(false);

    const currTraits = team
                        .filter(item => item)
                        .filter((v, i, a) => a.findIndex(t => (t.hero.id === v.hero.id)) === i)
                        .map(({ hero }) => ({ race: hero.race, class: hero.class }));

    const reduced: ReducedObj = {};

    currTraits.forEach(hero => {
      const [ firstClass, secondClass, thirdClass ] = hero.class;
      const [ firstRace, secondRace, thirdRace ] = hero.race;

      if (firstRace) reduced[firstRace] = (reduced[firstRace] || 0) + 1;
      if (secondRace) reduced[secondRace] = (reduced[secondRace] || 0) + 1;
      if (thirdRace) reduced[thirdRace] = (reduced[thirdRace] || 0) + 1;

      if (firstClass) reduced[firstClass] = (reduced[firstClass] || 0) + 1;
      if (secondClass) reduced[secondClass] = (reduced[secondClass] || 0) + 1;
      if (thirdClass) reduced[thirdClass] = (reduced[thirdClass] || 0) + 1;
    });

    const final: Trait[] = [];

    for (let [name, count] of Object.entries(reduced)) {
      const trait = getTraitByName(name);
      
      if (trait) {
        trait.curr = count;
        final.push(trait);
      }
    }

    setTeamTraits(final);

    return () => {
      setTeamTraits([]);
    }
  }, [team, getTraitByName, teamTraits.length]);

  const compare = (a: Trait, b: Trait) => {
    const activeA = a.curr >= a.stagesCount[0];
    const activeB = b.curr >= b.stagesCount[0];

    return (activeA === activeB) ? 0 : activeA ? -1 : 1;
  };

  const handleFilterPartials = (trait: Trait) => {
    const active = trait.curr >= trait.stagesCount[0];

    if (hidePartials) {
      return active;
    }
    else {
      return trait;
    }
  }

  const handleSetSearchValue = (name: string) => {
    if (name === searchValue) {
      setSearchValue('');
    }
    else {
      setSearchValue(name);
    }
  }

  return (
    <Container>
      {
        teamTraits.length > 0 && (
          <TraitsSwitchContainer className='noSelect' onClick={() => setHidePartials(!hidePartials)}>
            <TraitsSwitchText>Mostrar apenas sinergias ativas</TraitsSwitchText>
            <TraitsSwitch on={hidePartials ? 1 : 0} />
          </TraitsSwitchContainer>
        )
      }
      {
        teamTraits.length > 0 ? (
          teamTraits.filter(handleFilterPartials).sort(compare).map(trait => {
            const active = trait.curr >= trait.stagesCount[0];
  
            return (
              <TraitContainer
                key={trait.id}
                onClick={() => handleSetSearchValue(trait.name)}
              >
                {
                  trait.icon ? (
                    <TraitImage
                      draggable='false'
                      src={trait.icon}
                      active={active}
                    />
                  ) : (
                    <ContentLoader 
                      width={36}
                      height={37}
                      viewBox="0 0 36 37"
                      backgroundColor="#344852"
                      foregroundColor="#47616D"
                      speed={0.6}
                      style={{ marginRight: 8, marginTop: trait.type === 'class' ? 2 : 0 }}
                    >
                      {
                        trait.type === 'race' ?
                          <rect x="0" y="0" rx="2" ry="2" width="36" height="37" />
                          :
                          <path d="M-8.20395e-07 17.5982L7 6.00368e-08L30 -9.52666e-07L36 17.5982L30 36L7 36L-8.20395e-07 17.5982Z" />
                      }
                    </ContentLoader>
                  )
                }
                <TraitBadgeNumber>{trait.curr}</TraitBadgeNumber>
                <TraitContent>
                  <TraitName active={active}>{trait.name}</TraitName>
                  <TraitRatio>{`${trait.curr}/${trait.stagesCount[trait.stagesCount.length - 1]}`}</TraitRatio>
                </TraitContent>
  
                <Popup>
                  <PopupTitle>{trait.name}</PopupTitle>
                  <PopupDescriptionPre>{trait.descriptionPre}</PopupDescriptionPre>
                  {
                    trait.stagesCount.length > 1 && (
                      <PopupStages>
                        {
                          trait.stagesDescription.map((item, index) => (
                            <Stage
                              active={trait.curr >= trait.stagesCount[index]}
                              key={index}
                            >
                              <StageNumber >{trait.stagesCount[index]}</StageNumber>
                              <StageDescription>{item}</StageDescription>
                            </Stage>
                          ))
                        }
                      </PopupStages>  
                    )
                  }
                  <PopupDescriptionAfter>{trait.descriptionAfter}</PopupDescriptionAfter>
                </Popup>
              </TraitContainer>
          )})
        ) : (
          <EmptyState>
            <EmptyStateText>Sem sinergias ativas</EmptyStateText>
          </EmptyState>
        )
      }      
    </Container>
  );
}

export default Traits;