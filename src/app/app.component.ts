import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // private router: Router;
  //
  // constructor(router: Router) {
  //   this.router = router;
  // }

  static pathHeroes: string = 'heroes';
  urlHeroes: string = '/' + AppComponent.pathHeroes;

  constructor(private router: Router) { }

  hideButton(url: string): boolean {
    return this.router.url === url;
  }

  sliceUrl(url: string): string {
    return url.slice(1, url.length);
  }
}
