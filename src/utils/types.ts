import firebase from 'firebase';

export const ItemTypes = {
	TILE: 'tile',
};

export interface Hero {
  id: string;
  name: string;
  thumb: string;
  class: string[];
  race: string[];
  featured: boolean;
  cost: number;
};

export interface HeroesData {
  heroes: Hero[];
  getHeroById: (id: string) => Hero | undefined;
};

export interface Trait {
  id: string;
  name: string;
  type: string;
  icon: string;
  stagesCount: number[];
  stagesDescription: string[];
  curr: number;
  descriptionPre: string;
  descriptionAfter: string;
}

export interface TraitsData {
  traits: Trait[];
  getTraitByName: (name: string) => Trait | undefined;
}

export interface Team {
  hero: Hero;
  position: number;
  items: Object[];
  level: number;
}

export interface TeamData {
  team: Team[];
  addHero: (hero: Hero, position?: number) => void;
  removeHero: (hero: Hero, position: number) => void;
  swapPositions: (id: number, finalPos: number) => void;
  clearTeam: () => void;
  changeHeroLevel: (position: number, level: number) => void;
}

export interface AuthData {
  currentUser?: firebase.User | null;
  signup: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
  login: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
}