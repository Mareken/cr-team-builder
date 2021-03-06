import React, { createContext, useState, useContext, PropsWithChildren } from 'react';
import { uid } from '../utils/helpers';
import { TraitsData } from '../utils/types';

import angel from '../assets/images/traits/angel_icon.png';
import assassin from '../assets/images/traits/assassin_icon.png';
import beast from '../assets/images/traits/beast_icon.png';
import cyborg from '../assets/images/traits/cyborg_icon.png';
import demon from '../assets/images/traits/demon_icon.png';
import dragon from '../assets/images/traits/dragon_icon.png';
import druid from '../assets/images/traits/druid_icon.png';
import eastern from '../assets/images/traits/eastern_icon.png';
import elf from '../assets/images/traits/elf_icon.png';
import goblin from '../assets/images/traits/goblin_icon.png';
import human from '../assets/images/traits/human_icon.png';
import hunter from '../assets/images/traits/hunter_icon.png';
import guru from '../assets/images/traits/guru_icon.png';
import oceanborn from '../assets/images/traits/oceanborn_icon.png';
import olympian from '../assets/images/traits/olympian_icon.png';
import protector from '../assets/images/traits/protector_icon.png';
import punisher from '../assets/images/traits/punisher_icon.png';
import rider from '../assets/images/traits/rider_icon.png';
import sorcerer from '../assets/images/traits/sorcerer_icon.png';
import summoner from '../assets/images/traits/summoner_icon.png';
import undead from '../assets/images/traits/undead_icon.png';
import voidIcon from '../assets/images/traits/void_icon.png';
import warlock from '../assets/images/traits/warlock_icon.png';
import warlord from '../assets/images/traits/warlord_icon.png';
import warrior from '../assets/images/traits/warrior_icon.png';

const initialState = [
  {
    id: uid(),
    name: 'Anjo',
    type: 'race',
    icon: angel,
    stagesCount: [2, 4],
    stagesDescription: ['1 aliado', '2 aliados'],
    curr: 0,
    descriptionPre: `Anjos transformam os primeiros aliados abatidos em Forma Etérea, que continuam lutando por 6 segundos:`,
    descriptionAfter: ``,
  },
  {
    id: uid(),
    name: 'Assassino',
    type: 'class',
    icon: assassin,
    stagesCount: [3, 6],
    stagesDescription: ['200% de dano e 20% de chance de causar 200% de dano', '250% de dano e 35% de chance de causar 300% de dano (um acerto crítico é garantido se a vida do alvo estiver abaixo de 25%)'],
    curr: 0,
    descriptionPre: `Quando a sinergia está ativa, assassinos tornam-se invisíveis no começo da batalha. Seu primeiro ataque normal causa dano crítico e ataques subsequentes têm chance de causar dano crítico.`,
    descriptionAfter: `A partir de 6, para cada assassino adicional, a chance de acerto crítico aumenta em 5%`,
  },
  {
    id: uid(),
    name: 'Fera',
    type: 'race',
    icon: beast,
    stagesCount: [2, 4, 6],
    stagesDescription: ['10% a mais de dano de ataque para todos os aliados', 'Aumenta adicionalmente 5% de dano de ataque sempre que uma fera aliada usar uma habilidade', 'Aumenta adicionalmente 10% de dano de ataque sempre que uma fera aliada usar uma habilidade'],
    curr: 0,
    descriptionPre: `Ao posicionar feras diferentes:`,
    descriptionAfter: ``,
  },
  {
    id: uid(),
    name: 'Ciborgue',
    type: 'race',
    icon: cyborg,
    stagesCount: [2, 4, 6],
    stagesDescription: ['Aumenta em 100 a regeneração de vida de 1 ciborgue aleatório', 'Aumenta em 25 a armadura e em 150 a regeneração de vida de 2 ciborgues aleatórios', 'Aumenta em 50 a armadura e em 150 a regeneração de vida de todos os aliados'],
    curr: 0,
    descriptionPre: `Ao posicionar ciborgues diferentes:`,
    descriptionAfter: ``,
  },
  {
    id: uid(),
    name: 'Demônio',
    type: 'race',
    icon: demon,
    stagesCount: [2, 4, 6],
    stagesDescription: ['20% do dano causado', '35% do dano causado', '50% do dano causado e ativa Dano em Área: cada ataque normal dos demônios aliados causa 50% de dano físico a todos os inimigos dentro de 1 quadadro de distância do alvo'],
    curr: 0,
    descriptionPre: `Ataques normais de demônios causam dano verdadeiro adicional equivalente ao dano causado:`,
    descriptionAfter: ``,
  },
  {
    id: uid(),
    name: 'Dragão',
    type: 'race',
    icon: dragon,
    stagesCount: [2, 3],
    stagesDescription: ['50 de mana', '150 de mana'],
    curr: 0,
    descriptionPre: `Dragões restauram instantaneamente mana no começo da batalha:`,
    descriptionAfter: ``,
  },
  {
    id: uid(),
    name: 'Druida',
    type: 'class',
    icon: druid,
    stagesCount: [2, 4],
    stagesDescription: ['2 druidas de 1 estrela idênticos (em vez de 3) podem ser combinados em um de 2 estrelas. Restaura 10 de mana de todos os aliados a até 1 espaço quando morre', '2 druidas de 2 estrelas idênticos (em vez de 3) podem ser combinados em um de 3 estrelas. Restaura 20 de mana de todos os aliados a até 1 espaço quando morre'],
    curr: 2,
    descriptionPre: `Ao posicionar druidas diferentes:`,
    descriptionAfter: ``,
  },
  {
    id: uid(),
    name: 'Oriental',
    type: 'race',
    icon: eastern,
    stagesCount: [2, 4, 6],
    stagesDescription: ['800 de vida', '1.600 de vida', '2.400 de vida e ativa Ascenção: 3 aliados aleatórios recebem +80% de dano de ataque, +50 de poder de habilidade e +40% de velocidade de ataque'],
    curr: 0,
    descriptionPre: `Orientais recebem um escudo no início da batalha:`,
    descriptionAfter: ``,
  },
  {
    id: uid(),
    name: 'Elfo',
    type: 'race',
    icon: elf,
    stagesCount: [2, 4, 6],
    stagesDescription: ['15% de chance de esquiva', '25% de chance de esquiva', '40% de esquiva, e ao atacar, os elfos aliados possuem 15% de chance de enraizar os alvos por 2 segundos'],
    curr: 0,
    descriptionPre: `Elfos aumentam a chance de esquiva de ataques inimigos para todos os aliados:`,
    descriptionAfter: ``,
  },
  {
    id: uid(),
    name: 'Goblin',
    type: 'race',
    icon: goblin,
    stagesCount: [2, 4],
    stagesDescription: ['10 de todos os aliados e mais 10 para os goblins aliados', '30 de todos os aliados e mais 30 para os goblins aliados'],
    curr: 0,
    descriptionPre: `Goblins aumentam a velocidade de ataque de todos os aliados e um adicional para os goblins aliados:`,
    descriptionAfter: ``,
  },
  {
    id: uid(),
    name: 'Humano',
    type: 'race',
    icon: human,
    stagesCount: [2, 4, 6],
    stagesDescription: ['15 de mana', '20 de mana', '25 de mana'],
    curr: 0,
    descriptionPre: `Humanos restauram mana a cada 4 segundos, para todos os aliados:`,
    descriptionAfter: ``,
  },
  {
    id: uid(),
    name: 'Caçador',
    type: 'class',
    icon: hunter,
    stagesCount: [3, 6],
    stagesDescription: ['+30% de velocidade de ataque', '+50% de velocidade de ataque e ativa Marca do Caçador: cada ataque normal dos caçadores aliados cria um acúmulo de Marca do Caçador, que aumenta o dano de ataque normal dos caçadores aliados em 5%. Este efeito pode acumular até 10 vezes'],
    curr: 0,
    descriptionPre: `Caçadores recebem velocidade de ataque adicional:`,
    descriptionAfter: `A partir de 6, para cada caçador adicional, a velocidade de ataque adicional aumenta em 10%`,
  },
  {
    id: uid(),
    name: 'Gurru',
    type: 'race',
    icon: guru,
    stagesCount: [1],
    stagesDescription: [''],
    curr: 0,
    descriptionPre: `Quando você tem 2 heróis idênticos, você pode arrastar um Gurru com o mesmo nível para um deles para combiná-los em um herói de nivel mais alto:`,
    descriptionAfter: ``,
  },
  {
    id: uid(),
    name: 'Oceânico',
    type: 'race',
    icon: oceanborn,
    stagesCount: [2, 3, 4],
    stagesDescription: ['+30 de resistência mágica', '+45 de resistência mágica', '+60 de resistência mágica'],
    curr: 0,
    descriptionPre: `Posicionar oceânicos diferentes aumenta a resistência mágica de todos os aliados`,
    descriptionAfter: ``,
  },
  {
    id: uid(),
    name: 'Olimpiano',
    type: 'race',
    icon: olympian,
    stagesCount: [2, 4],
    stagesDescription: ['1.000 de dano recebido causa um raio provocando 400 de dano mágico', '900 de dano recebido causa um raio provocando 600 de dano mágico'],
    curr: 0,
    descriptionPre: `Ao posicionar 2 ou mais olimpianos em campo, sempre que eles receberem uma quantia de dano, surgirá um raio causando dano mágico a um inimigo aleatório`,
    descriptionAfter: ``,
  },
  {
    id: uid(),
    name: 'Protetor',
    type: 'class',
    icon: protector,
    stagesCount: [2, 4],
    stagesDescription: ['20% da vida máxima', '40% da vida máxima'],
    curr: 0,
    descriptionPre: `Ao conjurar uma habilidade, protetores recebem um escudo não cumulativo (não podem gerar outro enquanto um estiver ativo) com uma porcentagem de sua vida máxima, que dura 5 segundos, e atrai os ataques inimigos:`,
    descriptionAfter: ``,
  },
  {
    id: uid(),
    name: 'Justiceiro',
    type: 'class',
    icon: punisher,
    stagesCount: [2, 4, 6],
    stagesDescription: ['25% de chance', '45% de chance', '65% de chance e ativa Exorcismo: cada ataque normal dos justiceiros aliados causa dano verdadeiro adicional, equivalente a 3% dos PV máximo do alvo'],
    curr: 0,
    descriptionPre: `Ataques normais dos justiceiros têm chance de golpear 3 vezes, causando 60% do dano a cada golpe:`,
    descriptionAfter: `A partir de 6, para cada justiceiro adicional, a chance aumenta em 5%`,
  },
  {
    id: uid(),
    name: 'Cavaleiro',
    type: 'class',
    icon: rider,
    stagesCount: [3, 6],
    stagesDescription: ['150 de armadura e 45% de resistência mágica por 6 segundos', '300 de armadura e 60% de resistência mágica por 8 segundos, e ativa Investida: o dano de ataque dos cavaleiros aliados aumenta em 5% de seus PV atuais'],
    curr: 0,
    descriptionPre: `Cavaleiros recebem armadura e resistência mágica adicional no início da batalha, que dura por alguns segundos:`,
    descriptionAfter: `A partir de 6, para cada cavaleiro adicional, a duração do efeito aumenta em 2 segundos`,
  },
  {
    id: uid(),
    name: 'Feiticeiro',
    type: 'class',
    icon: sorcerer,
    stagesCount: [3, 6],
    stagesDescription: ['40 de poder de habilidade', '80 de poder de habilidade'],
    curr: 0,
    descriptionPre: `Posicionar feiticeiros diferentes aumenta o poder de habilidade dos feiticeiros aliados:`,
    descriptionAfter: `A partir de 6, para cada feiticeiro adicional, o poder de habilidade dos feiticeiros aliados aumenta em mais 15`,
  },
  {
    id: uid(),
    name: 'Invocador',
    type: 'class',
    icon: summoner,
    stagesCount: [2, 4, 6],
    stagesDescription: ['aumenta em 15%', 'aumenta em 35%', 'aumenta em 50% e ativa Encantar: transforma o dano dos pets invocados em dano mágico'],
    curr: 0,
    descriptionPre: `Posicionar invocadores diferentes aumenta o dano de ataque e a vida dos pets invocados:`,
    descriptionAfter: `A partir de 6, para cada invocador adicional, o efeito aumenta em 10%`,
  },
  {
    id: uid(),
    name: 'Morto-vivo',
    type: 'race',
    icon: undead,
    stagesCount: [2, 4],
    stagesDescription: ['35% de redução', '70% de redução'],
    curr: 0,
    descriptionPre: `Mortos-vivos reduzem a armadura de todos os inimigos:`,
    descriptionAfter: ``,
  },
  {
    id: uid(),
    name: 'Vazio',
    type: 'race',
    icon: voidIcon,
    stagesCount: [2, 4],
    stagesDescription: ['40% mais mana', '80% mais mana'],
    curr: 0,
    descriptionPre: `Ataques normais e habilidades de vazios aliados aplicam Grilhões de Mana nos inimigos, que consumirão mais mana para conjurar suas próximas habilidades:`,
    descriptionAfter: ``,
  },
  {
    id: uid(),
    name: 'Mago',
    type: 'class',
    icon: warlock,
    stagesCount: [2, 4],
    stagesDescription: ['+15% de roubo de vida', '+30% de roubo de vida. O excesso de vida é convertido em escudo'],
    curr: 0,
    descriptionPre: `Posicionar magos diferentes aumenta o roubo de vida de todos os aliados:`,
    descriptionAfter: ``,
  },
  {
    id: uid(),
    name: 'Senhor da Guerra',
    type: 'class',
    icon: warlord,
    stagesCount: [1],
    stagesDescription: [''],
    curr: 0,
    descriptionPre: `Senhores da Guerra aliados recebem os efeitos de todas as sinergias que estiverem ativas. Para cada efeito de sinergia recebido dessa forma, Senhores da Guerra recebem +10% de vida máxima e dano de ataque`,
    descriptionAfter: ``,
  },
  {
    id: uid(),
    name: 'Guerreiro',
    type: 'class',
    icon: warrior,
    stagesCount: [3, 6],
    stagesDescription: ['300% de armadura', '500% de armadura e ativa Parede de Ferro: os guerreiros não perderão mais do que 6% de sua vida máxima a cada vez que sofrerem dano físico'],
    curr: 0,
    descriptionPre: `Posicionar guerreiros diferentes aumenta a armadura de todos os guerreiros aliados:`,
    descriptionAfter: `A partir de 6, para cada guerreiro adicional, a armadura aumenta em 50%`,
  }
]

const TraitsContext = createContext<TraitsData>({} as TraitsData);

const TraitsProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [ traits, ] = useState(initialState);

  const getTraitByName = (name: string) => traits.find(trait => trait.name.toLowerCase() === name.toLowerCase());

  return (
    <TraitsContext.Provider value={{ traits, getTraitByName }}>
      { children }
    </TraitsContext.Provider>
  )
}

const useTraits = () => {
  const context = useContext(TraitsContext);

  if (!context)
    throw new Error('useTraits must be used within a TraitsProvider');

  return context;
}

export { TraitsProvider, useTraits as default };