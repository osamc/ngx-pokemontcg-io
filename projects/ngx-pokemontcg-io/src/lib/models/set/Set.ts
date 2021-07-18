import { Legalities } from '../common/Legalities';
import { Images } from './Images';

/**
 * An interface for a Card Set as defined at {@link https://docs.pokemontcg.io/api-reference/sets/set-object}
*/
export interface Set {
  id?: string;
  name?: string;
  series?: string;
  printedTotal?: number;
  total?: number;
  legalities?: Legalities;
  ptcgoCode?: string;
  releaseDate?: string;
  updatedAt?: string;
  images?: Images;
}

export class SetSearch {
  public static readonly ID = 'id';
  public static readonly NAME = 'name';
  public static readonly SERIES = 'series';
  public static readonly PRINTED_TOTAL = 'printedTotal';
  public static readonly TOTAL = 'total';
  public static readonly PTCGO_CODE = 'ptcgoCode';
  public static readonly RELEASE_DATE = 'releaseDate';
  public static readonly UPDATED_AT = 'updatedAt';

  public static readonly options: string[] = [
    SetSearch.ID,
    SetSearch.NAME,
    SetSearch.SERIES,
    SetSearch.PRINTED_TOTAL,
    SetSearch.TOTAL,
    SetSearch.PTCGO_CODE,
    SetSearch.RELEASE_DATE,
    SetSearch.UPDATED_AT,
  ];
}

export class CardSetSearch {

  private static PREFIX = 'set.';

  public static readonly ID = CardSetSearch.PREFIX + SetSearch.ID;
  public static readonly NAME =  CardSetSearch.PREFIX + SetSearch.NAME;
  public static readonly SERIES =  CardSetSearch.PREFIX + SetSearch.SERIES;
  public static readonly PRINTED_TOTAL =  CardSetSearch.PREFIX + SetSearch.PRINTED_TOTAL;
  public static readonly TOTAL = CardSetSearch.PREFIX + SetSearch.TOTAL;
  public static readonly PTCGO_CODE =  CardSetSearch.PREFIX + SetSearch.PTCGO_CODE;
  public static readonly RELEASE_DATE =  CardSetSearch.PREFIX + SetSearch.RELEASE_DATE;
  public static readonly UPDATED_AT =  CardSetSearch.PREFIX + SetSearch.UPDATED_AT;

  public static readonly options: string[] = [
    CardSetSearch.ID,
    CardSetSearch.NAME,
    CardSetSearch.SERIES,
    CardSetSearch.PRINTED_TOTAL,
    CardSetSearch.TOTAL,
    CardSetSearch.PTCGO_CODE,
    CardSetSearch.RELEASE_DATE,
    CardSetSearch.UPDATED_AT,
  ];
}
