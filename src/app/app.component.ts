import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: string = 'Hello IPME !';
  isClicked: boolean = false;

  private getUpperTitle(): string {
    return this.title.toUpperCase();
  }

  coucou(): void {
    this.title = 'Coucou IPME !';
    this.isClicked = !this.isClicked;
  }

  hello(): void {
    this.title = 'Hello IPME !';
    this.isClicked = !this.isClicked;
  }
}
