import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {YahtzeeComponent} from "./yahtzee/yahtzee.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {PokemonDetailComponent} from "./pokemon-detail/pokemon-detail.component";

const routes: Routes = [
  {path: NavbarComponent.pathHeroes, component: YahtzeeComponent},
  {path: NavbarComponent.pathPokemonList, component: PokemonListComponent},
  {path: NavbarComponent.pathPokemonList+'/:namePkmn', component: PokemonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
