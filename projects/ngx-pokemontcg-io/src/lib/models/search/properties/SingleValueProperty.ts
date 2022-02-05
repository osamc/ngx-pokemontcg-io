import { BaseProperty } from './BaseProperty';


export class SingleValueProperty extends BaseProperty {
  value: string;

  constructor(
    name: string,
    value: string,
    exact: boolean = false,
    exclude: boolean = false
  ) {
    super(name, exact, exclude);
    this.value = value;
  }

  public toString(): string {
    let toReturn = this.constructPropertyKey();
    toReturn += '"';
    toReturn += this.value;
    toReturn += '"';
    return toReturn;
  }
}
