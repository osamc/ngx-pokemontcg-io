import { SearchResult } from './../models/search/SearchResult';
import { HeaderConsts } from './../const/Headers';
import { UrlConsts } from './../const/Urls';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, ɵresetJitOptions } from '@angular/core';
import { Card } from '../models/card/Card';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Set } from '../models/set/Set';
import { Filter } from '../models/search/Filter';

@Injectable({
  providedIn: 'root',
})
export class PokemontcgIoService {
  private _apiKey!: string;

  constructor(private httpClient: HttpClient) {}

  public get apiKey(): string {
    return this._apiKey;
  }

  public set apiKey(key: string) {
    this._apiKey = key;
  }

  private getHeader(): HttpHeaders {
    let header = new HttpHeaders();
    header = header.set(HeaderConsts.API_KEY, this._apiKey);
    return header;
  }

  private getHttpOptions(): Object {
    let options = { headers: this.getHeader() };
    console.log(options);
    return options;
  }

  public getCard(cardId: string): Observable<Card> {
    let url = UrlConsts.BASE_URL + UrlConsts.GET_CARD + '/' + cardId;
    return this.httpClient.get<Card>(url, this.getHttpOptions()).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  public searchCards(filter: Filter): Observable<SearchResult<Card>> {
    let url = UrlConsts.BASE_URL + UrlConsts.GET_CARD + filter.toString();
    return this.httpClient.get<SearchResult<Card>>(url, this.getHttpOptions());
  }

  public getSets(): Observable<Array<Set>> {
    let url = UrlConsts.BASE_URL + UrlConsts.GET_SET;
    return this.httpClient.get<Array<Set>>(url, this.getHttpOptions()).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  public getSet(setId: string): Observable<Set> {
    let url = UrlConsts.BASE_URL + UrlConsts.GET_SET + setId;
    return this.httpClient.get<Set>(url, this.getHttpOptions()).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

}
