import React, { createContext, useReducer } from 'react';
import TraitsReducer from '../Reducers/TraitsReducer';

import angel from '../../assets/images/traits/angel_icon.png';
import assassin from '../../assets/images/traits/assassin_icon.png';
import beast from '../../assets/images/traits/beast_icon.png';
import cyborg from '../../assets/images/traits/cyborg_icon.png';
import demon from '../../assets/images/traits/demon_icon.png';
import dragon from '../../assets/images/traits/dragon_icon.png';
import druid from '../../assets/images/traits/druid_icon.png';
import eastern from '../../assets/images/traits/eastern_icon.png';
import elf from '../../assets/images/traits/elf_icon.png';
import goblin from '../../assets/images/traits/goblin_icon.png';
import human from '../../assets/images/traits/human_icon.png';
import hunter from '../../assets/images/traits/hunter_icon.png';
import guru from '../../assets/images/traits/guru_icon.png';
import oceanborn from '../../assets/images/traits/oceanborn_icon.png';
import olympian from '../../assets/images/traits/olympian_icon.png';
import protector from '../../assets/images/traits/protector_icon.png';
import punisher from '../../assets/images/traits/punisher_icon.png';
import rider from '../../assets/images/traits/rider_icon.png';
import sorcerer from '../../assets/images/traits/sorcerer_icon.png';
import summoner from '../../assets/images/traits/summoner_icon.png';
import undead from '../../assets/images/traits/undead_icon.png';
import voidIcon from '../../assets/images/traits/void_icon.png';
import warlock from '../../assets/images/traits/warlock_icon.png';
import warlord from '../../assets/images/traits/warlord_icon.png';
import warrior from '../../assets/images/traits/warrior_icon.png';

const initialState = {
  traits: [
    {
      id: '1',
      name: 'Anjo',
      type: 'race',
      icon: angel,
      stagesCount: [2, 4],
      stagesDescription: ['1 aliado', '2 aliados'],
      curr: 2,
      descriptionPre: `Anjos transformam os primeiros aliados abatidos em Forma Etérea, que continuam lutando por 6 segundos:`,
      descriptionAfter: ``,
    },
    {
      id: '2',
      name: 'Assassino',
      type: 'class',
      icon: assassin,
      stagesCount: [3, 6],
      stagesDescription: ['200% de dano e 20% de chance de causar 200% de dano', '250% de dano e 40% de chance de causar 250% de dano (um acerto crítico é garantido se a vida do alvo estiver abaixo de 25%)'],
      curr: 3,
      descriptionPre: `Quando a sinergia está ativa, assassinos tornam-se invisíveis no começo da batalha. Seu primeiro ataque normal causa dano crítico e ataques subsequentes têm chance de causar dano crítico.`,
      descriptionAfter: `A partir de 6, para cada assassino adicional, a chance de acerto crítico aumenta em 5%`,
    },
    {
      id: '3',
      name: 'Fera',
      type: 'race',
      icon: beast,
      stagesCount: [2, 4, 6],
      stagesDescription: ['10% a mais de dano de ataque para todos os aliados', 'Sempre que uma fera aliada usar uma habilidade, o dano de ataque de todos os aliados aumenta em 5%, cumulativamente', 'Sempre que uma fera aliada usar uma habilidade, o dano de ataque de todos os aliados aumenta em 10%, cumulativamente'],
      curr: 1,
      descriptionPre: `Ao posicionar feras diferentes:`,
      descriptionAfter: ``,
    },
    {
      id: '4',
      name: 'Ciborgue',
      type: 'race',
      icon: cyborg,
      stagesCount: [2, 4, 6],
      stagesDescription: ['Aumenta em 100 a regeneração de vida de 1 ciborgue aleatório', 'Aumenta em 25 a armadura e em 150 a regeneração de vida de 2 ciborgues aleatórios', 'Aumenta em 50 a armadura e em 200 a regeneração de vida de todos os aliados'],
      curr: 1,
      descriptionPre: `Ao posicionar ciborgues diferentes:`,
      descriptionAfter: ``,
    },
    {
      id: '5',
      name: 'Demônio',
      type: 'race',
      icon: demon,
      stagesCount: [2, 4, 6],
      stagesDescription: ['20% do dano causado', '35% do dano causado', '50% do dano causado e ativa Dano em Área: cada ataque normal dos demônios aliados causa 50% do dano físico a todos os inimigos dentro de 1 quadadro de distância do alvo principal'],
      curr: 1,
      descriptionPre: `Ataques normais de demônios causam dano verdadeiro adicional equivalente ao dano causado:`,
      descriptionAfter: ``,
    },
    {
      id: '6',
      name: 'Dragão',
      type: 'race',
      icon: dragon,
      stagesCount: [2, 3],
      stagesDescription: ['50 de mana', '150 de mana'],
      curr: 1,
      descriptionPre: `Dragões restauram instantaneamente mana no começo da batalha:`,
      descriptionAfter: ``,
    },
    {
      id: '7',
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
      id: '8',
      name: 'Oriental',
      type: 'race',
      icon: eastern,
      stagesCount: [2, 4, 6],
      stagesDescription: ['800 de vida', '2.000 de vida', '3.500 de vida e ativa Ascenção: 3 aliados aleatórios recebem +100% de dano de ataque, +50 de poder de habilidade e +40% de velocidade de ataque'],
      curr: 1,
      descriptionPre: `Orientais recebem um escudo no início da batalha:`,
      descriptionAfter: ``,
    },
    {
      id: '9',
      name: 'Elfo',
      type: 'race',
      icon: elf,
      stagesCount: [2, 4, 6],
      stagesDescription: ['15% de chance de esquiva', '25% de chance de esquiva', '40% de esquiva, e ao atacar, os elfos aliados possuem 15% de chance de enraizar os alvos por 2 segundos'],
      curr: 1,
      descriptionPre: `Elfos aumentam a chance de esquiva de ataques inimigos para todos os aliados:`,
      descriptionAfter: ``,
    },
    {
      id: '10',
      name: 'Goblin',
      type: 'race',
      icon: goblin,
      stagesCount: [2, 4],
      stagesDescription: ['10 de todos os aliados e mais 10 para os goblins aliados', '30 de todos os aliados e mais 30 para os goblins aliados'],
      curr: 3,
      descriptionPre: `Goblins aumentam a velocidade de ataque de todos os aliados e um adicional para os goblins aliados:`,
      descriptionAfter: ``,
    },
    {
      id: '11',
      name: 'Humano',
      type: 'race',
      icon: human,
      stagesCount: [2, 4, 6],
      stagesDescription: ['3 de mana por segundo', '5 de mana por segundo', '7 de mana por segundo'],
      curr: 1,
      descriptionPre: `Humanos restauram mana por segundo de todos os aliados:`,
      descriptionAfter: ``,
    },
    {
      id: '12',
      name: 'Caçador',
      type: 'class',
      icon: hunter,
      stagesCount: [3, 6],
      stagesDescription: ['30% de velocidade de ataque', '50% de velocidade de ataque e ativa Marca do Caçador: cada ataque normal dos caçadores aliados cria um acúmulo de Marca do Caçador, que aumenta o dano de ataque normal dos caçadores aliados em 5%. Este efeito pode acumular até 10 vezes'],
      curr: 1,
      descriptionPre: `Caçadores recebem velocidade de ataque adicional:`,
      descriptionAfter: `A partir de 6, para cada caçador adicional, a velocidade de ataque adicional aumenta em 10%`,
    },
    {
      id: '13',
      name: 'Gurru',
      type: 'race',
      icon: guru,
      stagesCount: [1],
      stagesDescription: [''],
      curr: 1,
      descriptionPre: `Quando você tem 2 heróis idênticos, você pode arrastar um Gurru com o mesmo nível para um deles para combiná-los em um herói de nivel mais alto:`,
      descriptionAfter: ``,
    },
    {
      id: '14',
      name: 'Oceânico',
      type: 'race',
      icon: oceanborn,
      stagesCount: [2, 3, 4],
      stagesDescription: ['+30 de resistência mágica', '+45 de resistência mágica', '+60 de resistência mágica'],
      curr: 1,
      descriptionPre: `Posicionar oceânicos diferentes aumenta a resistência mágica de todos os alidos`,
      descriptionAfter: ``,
    },
    {
      id: '15',
      name: 'Olimpiano',
      type: 'race',
      icon: olympian,
      stagesCount: [2],
      stagesDescription: [''],
      curr: 1,
      descriptionPre: `Ao posicionar 2 ou mais olimpianos em campo, sempre que eles receberem um total de 1.000 de dano, surgirá um raio que causa 400 de dano mágico a um inimigo aleatório. Esse dano pode ser afetado por efeitos de redução de dano do alvo`,
      descriptionAfter: ``,
    },
    {
      id: '16',
      name: 'Protetor',
      type: 'class',
      icon: protector,
      stagesCount: [2, 4],
      stagesDescription: ['20% da vida máxima', '40% da vida máxima'],
      curr: 1,
      descriptionPre: `Ao conjurar uma habilidade, protetores recebem um escudo não cumulativo (não podem gerar outro enquanto um estiver ativo) com uma porcentagem de sua vida máxima, que dura 5 segundos, e atrai os ataques inimigos:`,
      descriptionAfter: ``,
    },
    {
      id: '17',
      name: 'Justiceiro',
      type: 'class',
      icon: punisher,
      stagesCount: [2, 4],
      stagesDescription: ['25% de chance', '45% de chance', '65% de chance e ativa Exorcismo: cada ataque normal dos justiceiros aliados causa dano físico adicional, equivalente a 3% dos PV máximo do alvo'],
      curr: 1,
      descriptionPre: `Ataques normais dos justiceiros têm chance de golpear 3 vezes, causando 60% do dano a cada golpe:`,
      descriptionAfter: `A partir de 6, para cada justiceiro adicional, a chance aumenta em 5%`,
    },
    {
      id: '18',
      name: 'Cavaleiro',
      type: 'class',
      icon: rider,
      stagesCount: [3, 6],
      stagesDescription: ['150 de armadura e 60% de resistência mágica por 8 segundos', '300 de armadura e 75% de resistência mágica por 10 segundos, e ativa Investida: o dano de ataque dos cavaleiros aliados aumenta em 5% de sua vida atual'],
      curr: 2,
      descriptionPre: `Cavaleiros recebem armadura e resistência mágica adicional no início da batalha, que dura por alguns segundos:`,
      descriptionAfter: `A partir de 6, para cada cavaleiro adicional, a duração do efeito aumenta em 1 segundo e meio`,
    },
    {
      id: '19',
      name: 'Feiticeiro',
      type: 'class',
      icon: sorcerer,
      stagesCount: [3, 6],
      stagesDescription: ['40 de poder de habilidade', '80 de poder de habilidade'],
      curr: 1,
      descriptionPre: `Posicionar feiticeiros diferentes aumenta o poder de habilidade dos feiticeiros aliados:`,
      descriptionAfter: `A partir de 6, para cada feiticeiro adicional, o poder de habilidade dos feiticeiros aliados aumenta em mais 10`,
    },
    {
      id: '20',
      name: 'Invocador',
      type: 'class',
      icon: summoner,
      stagesCount: [2, 4, 6],
      stagesDescription: ['aumenta em 15%', 'aumenta em 25%', 'aumenta em 35%'],
      curr: 1,
      descriptionPre: `Posicionar invocadores diferentes aumenta o dano de ataque e a vida dos pets invocados:`,
      descriptionAfter: `A partir de 6, para cada invocador adicional, o efeito aumenta em 5%`,
    },
    {
      id: '21',
      name: 'Morto-vivo',
      type: 'race',
      icon: undead,
      stagesCount: [2, 4],
      stagesDescription: ['35% de redução', '70% de redução'],
      curr: 2,
      descriptionPre: `Mortos-vivos reduzem a armadura de todos os inimigos:`,
      descriptionAfter: ``,
    },
    {
      id: '22',
      name: 'Vazio',
      type: 'race',
      icon: voidIcon,
      stagesCount: [2, 4],
      stagesDescription: ['35% mais mana', '60% mais mana'],
      curr: 1,
      descriptionPre: `Ataques normais e habilidades de vazios aliados aplicam Grilhões de Mana nos inimigos, que consumirão mais mana para conjurar suas próximas habilidades:`,
      descriptionAfter: ``,
    },
    {
      id: '23',
      name: 'Mago',
      type: 'class',
      icon: warlock,
      stagesCount: [2, 4],
      stagesDescription: ['15% de roubo de vida', '+30% de roubo de vida. O excesso de vida é convertido em escudo'],
      curr: 1,
      descriptionPre: `Posicionar magos diferentes aumenta o roubo de vida de todos os aliados:`,
      descriptionAfter: ``,
    },
    {
      id: '24',
      name: 'Senhor da Guerra',
      type: 'class',
      icon: warlord,
      stagesCount: [1],
      stagesDescription: [''],
      curr: 1,
      descriptionPre: `Senhores da Guerra aliados recebem os efeitos de todas as sinergias que estiverem ativas. Para cada efeito de sinergia recebido dessa forma, Senhores da Guerra recebem +10% de vida máxima e dano de ataque`,
      descriptionAfter: ``,
    },
    {
      id: '25',
      name: 'Guerreiro',
      type: 'class',
      icon: warrior,
      stagesCount: [3, 6],
      stagesDescription: ['250% de armadura', '500% de armadura e ativa Parede de Ferro: os guerreiros não perderão mais do que 6% de sua vida máxima a cada vez que sofrerem dano físico'],
      curr: 2,
      descriptionPre: `Posicionar guerreiros diferentes aumenta a armadura de todos os guerreiros aliados:`,
      descriptionAfter: `A partir de 6, para cada guerreiro adicional, a armadura aumenta em 50%`,
    }
  ],
  error: null
}

const TraitsStore = ({ children }) => {
  const [ state, dispatch ] = useReducer(TraitsReducer, initialState);

  return (
    <Context.Provider value={[ state, dispatch ]}>
      { children }
    </Context.Provider>
  )
}

export const Context = createContext(initialState);
export default TraitsStore;