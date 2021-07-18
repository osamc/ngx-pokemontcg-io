export interface Attack {
  name?: string;
  cost?: string[];
  convertedEnergyCost?: number;
  damage?: string;
  text?: string;
}

export class AttackSearch {

  private static readonly PREFIX = 'attacks.';

  public static readonly NAME = AttackSearch.PREFIX + 'name';
  public static readonly COST = AttackSearch.PREFIX + 'cost';
  public static readonly CONVERTED_ENERGY_COST = AttackSearch.PREFIX + 'convertedEnergyCost';
  public static readonly DAMAGE = AttackSearch.PREFIX + 'damage';
  public static readonly TEXT = AttackSearch.PREFIX + 'text';

  public static readonly options: string[] = [
    AttackSearch.NAME,
    AttackSearch.COST,
    AttackSearch.CONVERTED_ENERGY_COST,
    AttackSearch.DAMAGE,
    AttackSearch.TEXT,
  ];
}
