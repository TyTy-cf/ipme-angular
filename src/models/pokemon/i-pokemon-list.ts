import {IPokeApiResult} from "./i-poke-api-result";

export interface IPokemonList {
  count: number;
  next: string;
  previous: string;
  results: IPokeApiResult[];
}
