import React, { createContext, useContext, useState, PropsWithChildren } from 'react';
import { uid } from '../utils/helpers';
import { HeroesData } from '../utils/types';

import anubis from '../assets/images/thumbs/anubis_thumb.svg';
import archanjo from '../assets/images/thumbs/archangel_thumb.svg';
import atena from '../assets/images/thumbs/atena_thumb.png';
import bajie from '../assets/images/thumbs/bajie_thumb.png';
import bangar from '../assets/images/thumbs/bangar_thumb.png';
import berserker from '../assets/images/thumbs/berserker_thumb.png';
import bionicNinja from '../assets/images/thumbs/bionic_ninja_thumb.png';
import calamity from '../assets/images/thumbs/calamity_thumb.png';
import cerberus from '../assets/images/thumbs/cerberus_thumb.svg';
import darkWizard from '../assets/images/thumbs/dark_wizard_thumb.svg';
import dimensionWalker from '../assets/images/thumbs/dimension_walker_thumb.png';
import drMolly from '../assets/images/thumbs/dr_molly_thumb.svg';
import dragoon from '../assets/images/thumbs/dragoon_thumb.png';
import everbloom from '../assets/images/thumbs/everbloom_thumb.png';
import evergreen from '../assets/images/thumbs/evergreen_thumb.png';
import famine from '../assets/images/thumbs/famine_thumb.png';
import fireFur from '../assets/images/thumbs/fire_fur_thumb.svg';
import flamecaller from '../assets/images/thumbs/flamecaller_thumb.png';
import forestsBreath from '../assets/images/thumbs/forests_breath_thumb.png';
import frostLotus from '../assets/images/thumbs/frost_lotus_thumb.png';
import generalOfWar from '../assets/images/thumbs/general_of_war_thumb.png';
import generalPuffer from '../assets/images/thumbs/general_puffer_thumb.png';
import glutton from '../assets/images/thumbs/glutton_thumb.png';
import groundsmasher from '../assets/images/thumbs/groundsmasher_thumb.png';
import gurru from '../assets/images/thumbs/gurru_thumb.png';
import headreaper from '../assets/images/thumbs/headreaper_thumb.png';
import hogRider from '../assets/images/thumbs/hog_rider_thumb.png';
import hornedMenace from '../assets/images/thumbs/horned_menace_thumb.png';
import icetusk from '../assets/images/thumbs/icetusk_thumb.png';
import joanOfArc from '../assets/images/thumbs/joan_of_arc_thumb.png';
import shakaraka from '../assets/images/thumbs/king_of_the_sea_thumb.png';
import kraken from '../assets/images/thumbs/kraken_thumb.png';
import lancelot from '../assets/images/thumbs/lancelot_thumb.png';
import lightbringer from '../assets/images/thumbs/lightbringer_thumb.png';
import lilith from '../assets/images/thumbs/lilith_thumb.png';
import lucifer from '../assets/images/thumbs/lucifer_thumb.svg';
import marshLord from '../assets/images/thumbs/marsh_lord_thumb.png';
import missSupersonic from '../assets/images/thumbs/miss_supersonic_thumb.png';
import missfortune from '../assets/images/thumbs/missfortune_thumb.png';
import moonlightDragon from '../assets/images/thumbs/moonlight_dragon_thumb.png';
import netherPrince from '../assets/images/thumbs/nether_prince_thumb.png';
import nezha from '../assets/images/thumbs/nezha_thumb.png';
import nightingale from '../assets/images/thumbs/nightingale_thumb.png';
import nightowl from '../assets/images/thumbs/nightowl_thumb.png';
import poseidon from '../assets/images/thumbs/poseidon_thumb.svg';
import protostar from '../assets/images/thumbs/protostar_thumb.png';
import rafaella from '../assets/images/thumbs/rafaella_thumb.svg';
import sanzang from '../assets/images/thumbs/sanzang_thumb.svg';
import scourge from '../assets/images/thumbs/scourge_thumb.png';
import serafim from '../assets/images/thumbs/serafim_thumb.svg';
import siren from '../assets/images/thumbs/siren_thumb.png';
import stalkerDroneS90 from '../assets/images/thumbs/stalker_drone_s90_thumb.png';
import starhorn from '../assets/images/thumbs/starhorn_thumb.png';
import steelfoist from '../assets/images/thumbs/steel_fist_thumb.png';
import stinger from '../assets/images/thumbs/stinger_thumb.png';
import swordDancer from '../assets/images/thumbs/sword_dancer_thumb.png';
import templarKnight from '../assets/images/thumbs/templar_knight_thumb.png';
import theExecutioner from '../assets/images/thumbs/the_executioner_thumb.png';
import joey from '../assets/images/thumbs/the_ultimate_weapon_thumb.png';
import uriella from '../assets/images/thumbs/uriella_thumb.svg';
import venom from '../assets/images/thumbs/venom_thumb.png';
import voidDestruction from '../assets/images/thumbs/void_destruction_thumb.png';
import voidDoom from '../assets/images/thumbs/void_doom_thumb.png';
import voodooElder from '../assets/images/thumbs/voodoo_elder_thumb.png';
import warMachine from '../assets/images/thumbs/war_machine_thumb.png';
import werewolf from '../assets/images/thumbs/werewolf_thumb.png';
import witchDoctor from '../assets/images/thumbs/witch_doctor_thumb.png';
import wolfCavalier from '../assets/images/thumbs/wolf_cavalier_thumb.png';
import wujing from '../assets/images/thumbs/wujing_thumb.svg';
import wukong from '../assets/images/thumbs/wukong_thumb.png';
import zeus from '../assets/images/thumbs/zeus_thumb.png';

const initialState = [
  {
    id: uid(),
    name: 'Anúbis',
    thumb: anubis,
    class: ['cavaleiro'],
    race: ['vazio'],
    featured: false,
    cost: 3
  },
  {
    id: uid(),
    name: 'Arcanjo (Michaela)',
    thumb: archanjo,
    class: ['mago'],
    race: ['anjo'],
    featured: true,
    cost: 4
  },
  {
    id: uid(),
    name: 'Atena',
    thumb: atena,
    class: ['protetor'],
    race: ['olimpiano'],
    featured: false,
    cost: 3
  },
  {
    id: uid(),
    name: 'Bajie',
    thumb: bajie,
    class: ['protetor'],
    race: ['oriental'],
    featured: true,
    cost: 1
  },
  {
    id: uid(),
    name: 'Bangar',
    thumb: bangar,
    class: ['guerreiro'],
    race: ['fera'],
    featured: false,
    cost: 1
  },
  {
    id: uid(),
    name: 'Berserker',
    thumb: berserker,
    class: ['guerreiro'],
    race: ['goblin'],
    featured: false,
    cost: 4
  },
  {
    id: uid(),
    name: 'Ninja Biônico',
    thumb: bionicNinja,
    class: ['assassino'],
    race: ['ciborgue'],
    featured: false,
    cost: 1
  },
  {
    id: uid(),
    name: 'Calamidade',
    thumb: calamity,
    class: ['cavaleiro'],
    race: ['morto-vivo'],
    featured: false,
    cost: 3
  },
  {
    id: uid(),
    name: 'Cérbero',
    thumb: cerberus,
    class: ['caçador'],
    race: ['demônio'],
    featured: false,
    cost: 4
  },
  {
    id: uid(),
    name: 'Mago Sombrio',
    thumb: darkWizard,
    class: ['feiticeiro'],
    race: ['morto-vivo'],
    featured: true,
    cost: 5
  },
  {
    id: uid(),
    name: 'Caminhante',
    thumb: dimensionWalker,
    class: ['justiceiro'],
    race: ['vazio'],
    featured: false,
    cost: 4
  },
  {
    id: uid(),
    name: 'Dra Molly',
    thumb: drMolly,
    class: ['invocador'],
    race: ['ciborgue'],
    featured: true,
    cost: 4
  },
  {
    id: uid(),
    name: 'Dragoon',
    thumb: dragoon,
    class: ['cavaleiro'],
    race: ['oriental', 'dragão'],
    featured: false,
    cost: 4
  },
  {
    id: uid(),
    name: 'Sempre-florida',
    thumb: everbloom,
    class: ['invocador', 'druida'],
    race: ['elfo'],
    featured: false,
    cost: 3
  },
  {
    id: uid(),
    name: 'Sempre-verde',
    thumb: evergreen,
    class: ['protetor', 'druida'],
    race: ['elfo'],
    featured: true,
    cost: 3
  },
  {
    id: uid(),
    name: 'Faminta',
    thumb: famine,
    class: ['caçador'],
    race: ['morto-vivo'],
    featured: false,
    cost: 1
  },
  {
    id: uid(),
    name: 'Pelo de Fogo',
    thumb: fireFur,
    class: ['caçador'],
    race: ['fera'],
    featured: true,
    cost: 2
  },
  {
    id: uid(),
    name: 'Feiticeira das Chamas',
    thumb: flamecaller,
    class: ['feiticeiro'],
    race: ['humano'],
    featured: false,
    cost: 3
  },
  {
    id: uid(),
    name: 'Sopro da Floresta',
    thumb: forestsBreath,
    class: ['caçador'],
    race: ['elfo'],
    featured: true,
    cost: 3
  },
  {
    id: uid(),
    name: 'Lótus de Gelo',
    thumb: frostLotus,
    class: ['feiticeiro'],
    race: ['humano'],
    featured: false,
    cost: 1
  },
  {
    id: uid(),
    name: 'General da Guerra',
    thumb: generalOfWar,
    class: ['guerreiro'],
    race: ['humano'],
    featured: false,
    cost: 3
  },
  {
    id: uid(),
    name: 'General Puffer',
    thumb: generalPuffer,
    class: ['guerreiro'],
    race: ['oriental', 'oceânico'],
    featured: true,
    cost: 2
  },
  {
    id: uid(),
    name: 'Glutton',
    thumb: glutton,
    class: ['guerreiro'],
    race: ['morto-vivo'],
    featured: false,
    cost: 2
  },
  {
    id: uid(),
    name: 'Esmaga Solo',
    thumb: groundsmasher,
    class: ['protetor'],
    race: ['ciborgue'],
    featured: false,
    cost: 3
  },
  {
    id: uid(),
    name: 'Gurru',
    thumb: gurru,
    class: ['druida'],
    race: ['gurru'],
    featured: false,
    cost: 4
  },
  {
    id: uid(),
    name: 'Caçador de Cabeças',
    thumb: headreaper,
    class: ['assassino'],
    race: ['goblin'],
    featured: false,
    cost: 4
  },
  {
    id: uid(),
    name: 'Goblin Caçador',
    thumb: hogRider,
    class: ['cavaleiro', 'caçador'],
    race: ['goblin'],
    featured: false,
    cost: 1
  },
  {
    id: uid(),
    name: 'Escaravelho',
    thumb: hornedMenace,
    class: ['assassino'],
    race: ['fera'],
    featured: true,
    cost: 3
  },
  {
    id: uid(),
    name: 'Presas de Gelo',
    thumb: icetusk,
    class: ['guerreiro'],
    race: ['fera'],
    featured: true,
    cost: 1
  },
  {
    id: uid(),
    name: "Joana D'arc",
    thumb: joanOfArc,
    class: ['invocador'],
    race: ['humano'],
    featured: true,
    cost: 1
  },
  {
    id: uid(),
    name: 'Shakaraka',
    thumb: shakaraka,
    class: ['caçador'],
    race: ['oceânico'],
    featured: false,
    cost: 5
  },
  {
    id: uid(),
    name: 'Kraken',
    thumb: kraken,
    class: ['caçador'],
    race: ['oceânico'],
    featured: false,
    cost: 3
  },
  {
    id: uid(),
    name: 'Lancelote',
    thumb: lancelot,
    class: ['justiceiro'],
    race: ['humano'],
    featured: false,
    cost: 2
  },
  {
    id: uid(),
    name: 'Portadora da Luz',
    thumb: lightbringer,
    class: ['feiticeiro'],
    race: ['humano'],
    featured: false,
    cost: 4
  },
  {
    id: uid(),
    name: 'Lilith',
    thumb: lilith,
    class: ['assassino'],
    race: ['demônio'],
    featured: false,
    cost: 2
  },
  {
    id: uid(),
    name: 'Lúcifer (Anjo Caído)',
    thumb: lucifer,
    class: ['justiceiro'],
    race: ['anjo', 'demônio'],
    featured: false,
    cost: 3
  },
  {
    id: uid(),
    name: 'Marsh Lord',
    thumb: marshLord,
    class: ['invocador', 'mago'],
    race: ['fera'],
    featured: true,
    cost: 2
  },
  {
    id: uid(),
    name: 'Supersônica',
    thumb: missSupersonic,
    class: ['feiticeiro'],
    race: ['ciborgue'],
    featured: false,
    cost: 1
  },
  {
    id: uid(),
    name: 'Dragão do Luar',
    thumb: moonlightDragon,
    class: ['feiticeiro'],
    race: ['elfo', 'dragão'],
    featured: false,
    cost: 2
  },
  {
    id: uid(),
    name: 'Príncipe do Inferno',
    thumb: netherPrince,
    class: ['mago'],
    race: ['demônio'],
    featured: true,
    cost: 3
  },
  {
    id: uid(),
    name: 'Nezha (Príncipe de Lótus)',
    thumb: nezha,
    class: ['justiceiro'],
    race: ['oriental'],
    featured: true,
    cost: 5
  },
  {
    id: uid(),
    name: 'Rouxinol',
    thumb: nightingale,
    class: ['justiceiro'],
    race: ['elfo'],
    featured: false,
    cost: 1
  },
  {
    id: uid(),
    name: 'Coruja da Noite',
    thumb: nightowl,
    class: ['invocador'],
    race: ['fera'],
    featured: false,
    cost: 3
  },
  {
    id: uid(),
    name: 'Poseidon',
    thumb: poseidon,
    class: ['invocador'],
    race: ['olimpiano', 'oceânico'],
    featured: false,
    cost: 4
  },
  {
    id: uid(),
    name: 'Proto-Estrela',
    thumb: protostar,
    class: ['protetor'],
    race: ['vazio'],
    featured: false,
    cost: 2
  },
  {
    id: uid(),
    name: 'Rafaella (Anjo da Cura)',
    thumb: rafaella,
    class: ['mago'],
    race: ['anjo'],
    featured: false,
    cost: 2
  },
  {
    id: uid(),
    name: 'Sanzang',
    thumb: sanzang,
    class: ['feiticeiro'],
    race: ['oriental'],
    featured: true,
    cost: 4
  },
  {
    id: uid(),
    name: 'Flagelo',
    thumb: scourge,
    class: ['cavaleiro'],
    race: ['demônio'],
    featured: false,
    cost: 2
  },
  {
    id: uid(),
    name: 'Serafim',
    thumb: serafim,
    class: ['Senhor da Guerra'],
    race: ['anjo'],
    featured: false,
    cost: 5
  },
  {
    id: uid(),
    name: 'Sereia',
    thumb: siren,
    class: ['assassino'],
    race: ['oceânico'],
    featured: false,
    cost: 2
  },
  {
    id: uid(),
    name: 'Drone Caçador S90',
    thumb: stalkerDroneS90,
    class: ['caçador'],
    race: ['ciborgue'],
    featured: false,
    cost: 3
  },
  {
    id: uid(),
    name: 'Infortúnio',
    thumb: missfortune,
    class: ['mago'],
    race: ['morto-vivo'],
    featured: false,
    cost: 4
  },
  {
    id: uid(),
    name: 'Trombeta Estelar',
    thumb: starhorn,
    class: ['feiticeiro'],
    race: ['fera'],
    featured: true,
    cost: 4
  },
  {
    id: uid(),
    name: 'Punhos de Aço',
    thumb: steelfoist,
    class: ['guerreiro'],
    race: ['ciborgue'],
    featured: false,
    cost: 1
  },
  {
    id: uid(),
    name: 'Ferrão',
    thumb: stinger,
    class: ['assassino'],
    race: ['elfo', 'morto-vivo'],
    featured: false,
    cost: 3
  },
  {
    id: uid(),
    name: 'Dançarina das Espadas',
    thumb: swordDancer,
    class: ['assassino'],
    race: ['elfo'],
    featured: false,
    cost: 5
  },
  {
    id: uid(),
    name: 'Cavaleiro Templário',
    thumb: templarKnight,
    class: ['cavaleiro'],
    race: ['humano'],
    featured: false,
    cost: 2
  },
  {
    id: uid(),
    name: 'O Executor',
    thumb: theExecutioner,
    class: ['guerreiro'],
    race: ['demônio'],
    featured: false,
    cost: 4
  },
  {
    id: uid(),
    name: 'Joey',
    thumb: joey,
    class: ['feiticeiro'],
    race: ['ciborgue'],
    featured: false,
    cost: 5
  },
  {
    id: uid(),
    name: 'Uriella (Anjo das Chamas)',
    thumb: uriella,
    class: ['justiceiro'],
    race: ['anjo'],
    featured: false,
    cost: 1
  },
  {
    id: uid(),
    name: 'Peçonha',
    thumb: venom,
    class: ['assassino'],
    race: ['dragão', 'fera'],
    featured: false,
    cost: 3
  },
  {
    id: uid(),
    name: 'Vazio: Destruição',
    thumb: voidDestruction,
    class: ['feiticeiro'],
    race: ['vazio'],
    featured: false,
    cost: 3
  },
  {
    id: uid(),
    name: 'Vazio: Extinção',
    thumb: voidDoom,
    class: ['mago'],
    race: ['vazio'],
    featured: false,
    cost: 5
  },
  {
    id: uid(),
    name: 'Goblin Voodoo',
    thumb: voodooElder,
    class: ['mago'],
    race: ['goblin'],
    featured: false,
    cost: 2
  },
  {
    id: uid(),
    name: 'Destruidora',
    thumb: warMachine,
    class: ['protetor'],
    race: ['ciborgue'],
    featured: true,
    cost: 5
  },
  {
    id: uid(),
    name: 'Lobisomem',
    thumb: werewolf,
    class: ['guerreiro'],
    race: ['humano', 'fera'],
    featured: true,
    cost: 3
  },
  {
    id: uid(),
    name: 'Doutor Bruxo',
    thumb: witchDoctor,
    class: ['invocador', 'druida'],
    race: ['fera'],
    featured: true,
    cost: 1
  },
  {
    id: uid(),
    name: 'Lobo Amazona',
    thumb: wolfCavalier,
    class: ['cavaleiro'],
    race: ['elfo'],
    featured: false,
    cost: 2
  },
  {
    id: uid(),
    name: 'Wujing',
    thumb: wujing,
    class: ['caçador'],
    race: ['oriental'],
    featured: false,
    cost: 2
  },
  {
    id: uid(),
    name: 'Wukong',
    thumb: wukong,
    class: ['guerreiro'],
    race: ['oriental'],
    featured: true,
    cost: 4
  },
  {
    id: uid(),
    name: 'Zeus',
    thumb: zeus,
    class: ['guerreiro'],
    race: ['olimpiano'],
    featured: false,
    cost: 5
  }
]

const HeroesContext = createContext<HeroesData>({} as HeroesData);

const HeroesProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [ heroes, ] = useState(initialState);

  const getHeroById = (id: string) => heroes.find(hero => hero.id === id);

  return (
    <HeroesContext.Provider value={{ heroes, getHeroById }}>
      { children }
    </HeroesContext.Provider>
  )
}

const useHeroes = () => {
  const context = useContext(HeroesContext);

  if (!context)
    throw new Error('useHeroes must be used within a HeroesProvider');

  return context;
}

export { HeroesProvider, useHeroes as default };