import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPokemonList} from "../models/pokemon/i-pokemon-list";
import {IPokemon} from "../models/pokemon/i-pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  /**
   * Interface vs Classe pour les données d'une API :
   * - interface : si vous n'avez pas besoin d'instancier vos données de l'API (que pour du GET)
   * - classe : vous pouvez instancier vos données (GET, POST, PUT, DELETE)
   *
   * Interface en Typescript :
   * - ce n'est pas qu'un contract à respecter lorsqu'une classe implémente une interface
   * - cela peut simplement servir de schéma de données Json
   *
   */

  baseUrl: string = 'https://pokeapi.co/api/v2/';

  constructor(private httpClient: HttpClient) { }

  getPokemonsByOffsetLimit(offset: number, limit: number = 20): Observable<IPokemonList> {
    return this.httpClient.get<IPokemonList>(this.baseUrl + 'pokemon/?offset='+offset+'&limit='+limit);
  }

  getUrlResult(url: string): Observable<IPokemon> {
    return this.httpClient.get<IPokemon>(url);
  }

  getPokemonByName(name: string): Observable<IPokemon> {
    return this.httpClient.get<IPokemon>(this.baseUrl + 'pokemon/' + name);
  }

  getUrlImageByType(name: string): string {
    return 'assets/images/pokemon/pkmn-types/type-' + name + '.png';
  }

}
