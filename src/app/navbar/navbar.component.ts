import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  static pathAccount : string = 'account';
  urlAccount: string = '/' + NavbarComponent.pathAccount;

  static pathHeroes : string = 'heroes';
  urlHeroes: string = '/' + NavbarComponent.pathHeroes;

  static pathPokemonList: string = 'pokemons';
  urlPokemonList: string = '/' + NavbarComponent.pathPokemonList;

  static pathFormUser : string = 'form-user';
  urlFormUser: string = '/' + NavbarComponent.pathFormUser;

  // private router: Router;
  //
  // constructor(router: Router) {
  //   this.router = router;
  // }
  constructor(private router: Router) { }

  hideButton(url: string): boolean {
    return this.router.url === url;
  }

  sliceUrl(url: string): string {
    return url.slice(1, url.length);
  }

}
