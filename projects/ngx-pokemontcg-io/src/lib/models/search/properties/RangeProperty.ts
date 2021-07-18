import { BaseProperty } from './BaseProperty';

export class RangeProperty extends BaseProperty {
  startValue: string;
  endValue: string;
  inclusive: boolean;

  constructor(
    name: string,
    startValue: string,
    endValue: string,
    inclusive: boolean,
    exact: boolean = false,
    exclude: boolean = false
  ) {
    super(name, exact, exclude);
    this.startValue = startValue;
    this.endValue = endValue;
    this.inclusive = inclusive;
  }

  public toString(): string {
    let toReturn = this.constructPropertyKey();
    toReturn += this.inclusive ? '[' : '{';
    toReturn += this.startValue;
    toReturn += ' TO ';
    toReturn += this.endValue;
    toReturn += this.inclusive ? ']' : '}';
    return toReturn;
  }
}
