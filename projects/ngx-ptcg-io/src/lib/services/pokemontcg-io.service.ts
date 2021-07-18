import { SearchResult } from './../models/search/SearchResult';
import { HeaderConsts } from './../const/Headers';
import { UrlConsts } from './../const/Urls';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../models/card/Card';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Set, SetSearch } from '../models/set/Set';
import { Filter } from '../models/search/Filter';

@Injectable({
  providedIn: 'root',
})
export class PokemontcgIoService {
  private _apiKey!: string;

  constructor(private httpClient: HttpClient) {}

  /**
   * Get the configured API Key
   * @returns {string}
   * */
  public get apiKey(): string {
    return this._apiKey;
  }

  /**
   * Set the API key for the service
   * @param {string} key - The API Key to set
   * */
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

  /**
   * Get a card from it's given Card ID
   * @param {string} cardId - The Card ID to retrieve
   * @returns {Card}
   * */
  public getCard(cardId: string): Observable<Card> {
    let url = UrlConsts.BASE_URL + UrlConsts.GET_CARD + '/' + cardId;
    return this.httpClient.get<Card>(url, this.getHttpOptions()).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  /**
   * Search for a card from a defined filter object
   * @param {Filter} filter - Filter defining the properties for the desired cards
   * @return {SearchResult<Card>}
   * */
  public searchCards(filter: Filter): Observable<SearchResult<Card>> {
    let url = UrlConsts.BASE_URL + UrlConsts.GET_CARD + filter.toString();
    return this.httpClient.get<SearchResult<Card>>(url, this.getHttpOptions());
  }

  /**
   * Get the list of sets provided by the API
   * @return {Array<Set>}
   * */
  public getSets(): Observable<Array<Set>> {
    let url = UrlConsts.BASE_URL + UrlConsts.GET_SET;
    return this.httpClient.get<Array<Set>>(url, this.getHttpOptions()).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  /**
   * Get a Set from it's given Set ID
   * @param {string} setId - The Set ID to retrieve
   * @returns {Set}
   * */
  public getSet(setId: string): Observable<Set> {
    let url = UrlConsts.BASE_URL + UrlConsts.GET_SET + setId;
    return this.httpClient.get<Set>(url, this.getHttpOptions()).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  /**
   * Search for a list of sets defined by a given filter
   * @param {Filter} Filter
   * @returns {SearchResult<Set>}
   * */
  public searchSet(filter: Filter): Observable<SearchResult<Set>> {
    let url = UrlConsts.BASE_URL + UrlConsts.GET_SET + filter.toString();
    return this.httpClient.get<SearchResult<Set>>(url, this.getHttpOptions());
  }

  /**
   * Get a list Pokemon Types from the API
   * @returns {Array<string>}
   */
  public getTypes(): Observable<Array<string>> {
    let url = UrlConsts.BASE_URL + UrlConsts.GET_TYPES;
    return this.httpClient.get<Set>(url, this.getHttpOptions()).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  /**
   * Get a list Card Sub-types from the API
   * @returns {Array<string>}
   */
  public getSubTypes(): Observable<Array<string>> {
    let url = UrlConsts.BASE_URL + UrlConsts.GET_SUBTYPES;
    return this.httpClient.get<Set>(url, this.getHttpOptions()).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  /**
   * Get a list Card Super-types from the API
   * @returns {Array<string>}
   */
  public getSuperTypes(): Observable<Array<string>> {
    let url = UrlConsts.BASE_URL + UrlConsts.GET_SUPERTYPES;
    return this.httpClient.get<Set>(url, this.getHttpOptions()).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  /**
   * Get a list Card rarities from the API
   * @returns {Array<string>}
   */
  public getRarities(): Observable<Array<string>> {
    let url = UrlConsts.BASE_URL + UrlConsts.GET_RARITIES;
    return this.httpClient.get<Set>(url, this.getHttpOptions()).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }
}
