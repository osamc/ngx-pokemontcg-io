export interface SearchResult<T> {
  data?: Array<T>;
  count?: number;

  page?: number;
  pageSize?: number;

  totalCount?: number;
}
