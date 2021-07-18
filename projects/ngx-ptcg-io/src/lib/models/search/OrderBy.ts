export class OrderBy {
  ascending: boolean;
  property: string;

  constructor(property: string, ascending: boolean = true) {
    this.property = property;
    this.ascending = ascending;
  }

  public toString(): string {
    let toReturn = '';
    if (!this.ascending) {
      toReturn += "-";
    }
    toReturn += this.property;
    return toReturn;
  }

}
