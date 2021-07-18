export interface Ability {
  name?: string;
  text?: string;
  type?: string;
}

export class AbilitySearch {

  private static readonly PREFIX = 'ability.'

  public static readonly NAME = AbilitySearch.PREFIX + 'name';
  public static readonly TEXT = AbilitySearch.PREFIX + 'text';
  public static readonly TYPE = AbilitySearch.PREFIX + 'type';

  public static readonly options: string[] = [
    AbilitySearch.NAME,
    AbilitySearch.TEXT,
    AbilitySearch.TYPE,
  ];
}
