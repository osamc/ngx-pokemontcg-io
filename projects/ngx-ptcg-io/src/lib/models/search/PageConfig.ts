export class PageConfig {
  page?: number;
  pageSize?: number;

  constructor(page?: number, pageSize?: number) {
    this.page = page;
    this.pageSize = pageSize;
  }

  public toString(): string {
    let toReturn = '';

    if (this.page) {
      toReturn +=  'page=';
      toReturn += this.page;
    }

    if (this.pageSize) {
      if (this.page) {
        toReturn += '&'
      }
      toReturn += 'pageSize=';
      toReturn += this.pageSize;
    }

    return toReturn;
  }

}
