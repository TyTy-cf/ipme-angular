import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../service/pokemon.service";
import {IPokemonList} from "../../models/pokemon/i-pokemon-list";
import {IPokemon} from "../../models/pokemon/i-pokemon";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  static defaultUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  iPokemonList: IPokemonList|undefined;
  iPokemonArray: IPokemon[] = [];
  offset: number = 0;


  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.callPage(0);
  }

  getImageFromUrl(url: number): string {
    return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+url+'.png';
  }

  callPage(number: number) {
    this.offset += number;
    this.iPokemonArray = [];
    this.pokemonService.getPokemonsByOffsetLimit(this.offset)
      // Fonction anonyme en JS / TS
      .subscribe((iPokemonList: IPokemonList) => {
        this.iPokemonList = iPokemonList;
        for(let result of iPokemonList.results) {
          this.pokemonService.getUrlResult(result.url).subscribe((pokemon: IPokemon) => {
            this.iPokemonArray.push(pokemon);
            // sort attend un number pour trier : si négatif alors plus petit, sinon plus grand
            this.iPokemonArray.sort((p1, p2) => p1.id - p2.id);
          });
        }
      });
  }

  getUrlImageByType(name: string): string {
    console.log(name);
    return 'assets/images/pokemon/pkmn-types/type-' + name + '.png';
  }
}
