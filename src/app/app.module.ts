import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YahtzeeComponent } from './yahtzee/yahtzee.component';
import { NavbarComponent } from './navbar/navbar.component';
import {UtilityService} from "../service/utility.service";

@NgModule({
  declarations: [
    AppComponent,
    YahtzeeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UtilityService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
