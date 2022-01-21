import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {YahtzeeComponent} from "./yahtzee/yahtzee.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: AppComponent.pathHeroes, component: YahtzeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
