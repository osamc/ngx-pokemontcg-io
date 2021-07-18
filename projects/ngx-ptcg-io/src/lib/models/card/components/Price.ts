export interface Price {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
}

export class PriceSearch {

  private static readonly PREFIX = "price."

  public static readonly LOW = PriceSearch.PREFIX + 'low';
  public static readonly MID = PriceSearch.PREFIX + 'mid';
  public static readonly HIGH = PriceSearch.PREFIX + 'high';
  public static readonly MARKET = PriceSearch.PREFIX + 'market';
  public static readonly DIRECT_LOW = PriceSearch.PREFIX + 'directLow';

  public static readonly options: string[] = [
    PriceSearch.LOW,
    PriceSearch.MID,
    PriceSearch.HIGH,
    PriceSearch.MARKET,
    PriceSearch.DIRECT_LOW
  ]

}
