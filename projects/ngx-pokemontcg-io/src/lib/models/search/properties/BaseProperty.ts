export abstract class BaseProperty {
  name: string;
  exact: boolean;
  exclude: boolean;

  constructor(name: string, exact: boolean = false, exclude: boolean = false) {
    this.name = name;
    this.exact = exact;
    this.exclude = exclude;
  }

  public abstract toString(): string;

  protected constructPropertyKey(): string {

    let toReturn = '';

    if (this.exact) {
      toReturn += '!';
    }
    if (this.exclude) {
      toReturn += '-';
    }

    toReturn += this.name;
    toReturn += ':'

    return toReturn;

  }

}
