import { CardArt } from './components/CardArt';
import { Legalities } from '../common/Legalities';
import { TcgPlayer } from './components/TcgPlayer';
import { Ability } from './components/Ability';
import { Attack } from './components/Attack';
import { Weakness } from './components/Weakness';
import { Set } from '../set/Set';

/**
 * A Card interface as defined by {@link https://docs.pokemontcg.io/api-reference/cards/card-object}
 */
export interface Card {
  id?: string;
  name?: string;
  supertype?: string;
  subtypes?: string[];
  hp?: string;
  types?: string[];
  evolvesFrom?: string;
  evolvesTo?: string[]
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

export class CardSearch {
  public static readonly ID = 'id';
  public static readonly NAME = 'name';
  public static readonly SUPER_TYPE = 'supertype';
  public static readonly SUB_TYPES = 'subtypes';
  public static readonly HP = 'hp';
  public static readonly TYPES = 'types';
  public static readonly EVOLVES_FROM = 'evolvesFrom';
  public static readonly RETREAT_COST = 'retreatCost';
  public static readonly RETREAT_COST_COUNT = 'convertedRetreatCost';
  public static readonly NUMBER = 'number';
  public static readonly ARTIST = 'artist';
  public static readonly FLAVOUR_TEXT = 'flavorText';
  public static readonly NATIONAL_POKEDEX_NUMBERS = 'nationalPokedexNumbers';

  public static readonly options: string[] = [
    CardSearch.ID,
    CardSearch.NAME,
    CardSearch.SUPER_TYPE,
    CardSearch.SUB_TYPES,
    CardSearch.HP,
    CardSearch.TYPES,
    CardSearch.EVOLVES_FROM,
    CardSearch.RETREAT_COST,
    CardSearch.RETREAT_COST_COUNT,
    CardSearch.NUMBER,
    CardSearch.ARTIST,
    CardSearch.FLAVOUR_TEXT,
    CardSearch.NATIONAL_POKEDEX_NUMBERS,
  ];
}
