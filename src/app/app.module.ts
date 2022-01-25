import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YahtzeeComponent } from './yahtzee/yahtzee.component';
import { NavbarComponent } from './navbar/navbar.component';
import {UtilityService} from "../service/utility.service";
import {HttpClientModule} from "@angular/common/http";
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormUserComponent } from './form-user/form-user.component';
import { FormUserCodeComponent } from './form-user-code/form-user-code.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    YahtzeeComponent,
    NavbarComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    HeroDetailComponent,
    FormUserComponent,
    FormUserCodeComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Obligatoire pour faire une requête Http
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UtilityService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
