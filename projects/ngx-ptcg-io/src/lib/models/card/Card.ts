import { CardArt } from './components/CardArt';
import { Legalities } from '../common/Legalities';
import { TcgPlayer } from './components/TcgPlayer';
import { Ability } from './components/Ability';
import { Attack } from './components/Attack';
import { Weakness } from './components/Weakness';
import { Set } from '../set/Set';

export interface Card {
  id?: string;
  name?: string;
  supertype?: string;
  subtypes?: string[];
  hp?: string;
  types?: string[];
  evolvesFrom?: string;
  abilities?: Ability[];
  attacks?: Attack[];
  weaknesses?: Weakness[];
  retreatCost?: string[];
  convertedRetreatCost?: number;
  set?: Set;
  number?: string;
  artist?: string;
  rarity?: string;
  flavorText?: string;
  nationalPokedexNumbers?: number[];
  legalities?: Legalities;
  images?: CardArt;
  tcgplayer?: TcgPlayer;
}
