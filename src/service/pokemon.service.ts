import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPokemonList} from "../models/pokemon/i-pokemon-list";
import {IPokemon} from "../models/pokemon/i-pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl: string = 'https://pokeapi.co/api/v2/';

  constructor(private httpClient: HttpClient) { }

  getPokemonsByOffsetLimit(offset: number, limit: number = 20): Observable<IPokemonList> {
    return this.httpClient.get<IPokemonList>(this.baseUrl + 'pokemon/?offset='+offset+'&limit='+limit);
  }

  getUrlResult(url: string): Observable<IPokemon> {
    return this.httpClient.get<IPokemon>(url);
  }

}
