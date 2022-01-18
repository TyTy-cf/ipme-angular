import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {YahtzeeComponent} from "./yahtzee/yahtzee.component";

const routes: Routes = [
  {path: '', component: YahtzeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
