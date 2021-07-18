import { Price } from "./Price";

export interface TcgPlayer {
  url: string;
  updatedAt: string;
  prices: Price[];
}
