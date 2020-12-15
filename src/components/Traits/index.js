import React, { useEffect } from 'react';

import ContentLoader from 'react-content-loader'
import useTeam from '../../context/TeamContext';

import { Container, Trait, TraitImage, TraitBadgeNumber, TraitContent, TraitName, TraitRatio, EmptyState, EmptyStateText, Popup, PopupTitle, PopupDescriptionPre, PopupDescriptionAfter, PopupStages, Stage, StageNumber, StageDescription } from './styles';

const Traits = () => {
  const { state } = useTeam();

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <Container>
      {/* {
        !state.error && state.team.traits && state.team.traits.map(trait => {
          const active = trait.curr >= trait.stagesCount[0];

          return (
            <Trait key={trait.id}>
              {
                trait.icon ? (
                  <TraitImage
                    draggable='false'
                    src={trait.icon}
                    active={active}
                  />
                ) : (
                  <ContentLoader 
                    speed={2}
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
            </Trait>
        )})
      } */}

      <EmptyState>
        <EmptyStateText>Sem sinergias ativas</EmptyStateText>
      </EmptyState>
    </Container>
  );
}

export default Traits;