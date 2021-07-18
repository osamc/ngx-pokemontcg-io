export interface Legalities {
  unlimited?: string;
  standard?: string;
  expanded?: string;
}

export class LegalitiesSearch {
  public static readonly UNLIMITED = 'legalities.unlimited';
  public static readonly STANDARD = 'legalities.standard';
  public static readonly EXPANDED = 'legalities.expanded';

  public static readonly LEGAL_VALUE = 'Legal';

  public static readonly options: string[] = [
    LegalitiesSearch.UNLIMITED,
    LegalitiesSearch.STANDARD,
    LegalitiesSearch.EXPANDED,
  ];
}
