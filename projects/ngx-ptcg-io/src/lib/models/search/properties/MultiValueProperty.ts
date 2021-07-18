import { BaseProperty } from "./BaseProperty";

export class MutliValueProperty extends BaseProperty {

  values: string[];

  constructor(name:string, values: string[] = [], exact: boolean = false, exclude: boolean = false) {
    super(name, exact, exclude);
    this.values = values;
  }

  public toString(): string {

    let toReturn = "(";

    for(let i = 0; i < this.values.length; i++) {
      let value = this.values[i];
      toReturn += this.constructPropertyKey();
      toReturn += '"';
      toReturn += value;
      toReturn += '"';
      if (i != this.values.length - 1) {
        toReturn += " OR ";
      }
    }

    toReturn += ")";
    return toReturn;

  }




}
