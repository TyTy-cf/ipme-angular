import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YahtzeeComponent } from './yahtzee/yahtzee.component';
import { NavbarComponent } from './navbar/navbar.component';
import {UtilityService} from "../service/utility.service";
import {HttpClientModule} from "@angular/common/http";
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [
    AppComponent,
    YahtzeeComponent,
    NavbarComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Obligatoire pour faire une requête Http
  ],
  providers: [
    UtilityService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
