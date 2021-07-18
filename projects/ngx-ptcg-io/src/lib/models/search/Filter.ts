import { OrderBy } from './OrderBy';
import { PageConfig } from './PageConfig';
import { BaseProperty } from './properties/BaseProperty';

export class Filter {
  properties?: Array<BaseProperty>;
  orderBy?: Array<OrderBy>;

  pageConfig?: PageConfig;

  constructor(
    properties?: Array<BaseProperty>,
    orderBy?: Array<OrderBy>,
    pageConfig?: PageConfig
  ) {
    this.properties = properties;
    this.orderBy = orderBy;
    this.pageConfig = pageConfig;
  }

  public toString(): string {
    let toReturn = '';
    let started: boolean = false;

    if (this.properties) {
      if (!started) {
        toReturn += '?';
        started = true;
      }
      toReturn += this.getProperties();
    }

    if (this.pageConfig) {
      if (!started) {
        toReturn += '?';
        started = true;
      } else {
        toReturn += '&';
      }
      toReturn += this.pageConfig.toString();
    }

    if (this.orderBy) {
      if (!started) {
        toReturn += '?';
        started = true;
      } else {
        toReturn += '&';
      }
      toReturn += this.getOrderBy();
    }

    return toReturn;
  }

  private getProperties(): string {
    let toReturn = 'q=';

    if (this.properties) {
      for (let i = 0; i < this.properties.length; i++) {
        toReturn += this.properties[i].toString();

        if (i != this.properties.length) {
          toReturn += ' ';
        }
      }
    }

    return toReturn;
  }

  private getOrderBy(): string {
    let toReturn = '';

    if (this.orderBy) {
      toReturn += 'orderBy=';

      for (let i = 0; i < this.orderBy.length; i++) {
        toReturn += this.orderBy[i].toString();
        if (i != this.orderBy.length) {
          toReturn += ',';
        }
      }
    }

    return toReturn;
  }
}
