export interface Weakness {
  type?: string;
  value?: string;
}

export class WeaknessSearch {

  private static readonly PREFIX = "weakness.";

  public static readonly TYPE = WeaknessSearch.PREFIX + 'type';
  public static readonly VALUE = WeaknessSearch.PREFIX + 'value';

  public static readonly options: string[] = [
    WeaknessSearch.TYPE,
    WeaknessSearch.VALUE,
  ];
}
