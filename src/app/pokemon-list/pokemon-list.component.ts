import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../service/pokemon.service";
import {IPokemonList} from "../../models/pokemon/i-pokemon-list";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  static defaultUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  iPokemonList: IPokemonList|undefined;
  offset: number = 0;
  

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.callPage(0);
  }

  getImageFromUrl(url: string): string {
    const sizeUrl: number = PokemonListComponent.defaultUrl.length;
    let id: string = url.slice(sizeUrl, url.length);
    id = id.replace('/', '');
    return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+id+'.png';
  }

  callPage(number: number) {
    this.offset += number;
    this.pokemonService.getPokemonsByOffsetLimit(this.offset)
      // Fonction anonyme en JS / TS
      .subscribe((iPokemonList: IPokemonList) => {
        this.iPokemonList = iPokemonList;
        for(let result of iPokemonList.results) {
          this.pokemonService.getUrlResult(result.url).subscribe((pokemon) => {
            console.log(pokemon);
          });
        }
      });
  }
}
