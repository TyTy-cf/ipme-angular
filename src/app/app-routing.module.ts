import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {YahtzeeComponent} from "./yahtzee/yahtzee.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";

const routes: Routes = [
  {path: NavbarComponent.pathHeroes, component: YahtzeeComponent},
  {path: NavbarComponent.pathPokemonList, component: PokemonListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
