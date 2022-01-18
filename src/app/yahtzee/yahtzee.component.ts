import {Component} from '@angular/core';
import {Hero} from "../../models/hero";
import {Warrior} from "../../models/warrior";
import {Rogue} from "../../models/rogue";
import {Mage} from "../../models/mage";

@Component({
  selector: 'app-yahtzee',
  templateUrl: './yahtzee.component.html',
  styleUrls: ['./yahtzee.component.scss']
})
export class YahtzeeComponent {

  hero: Hero = new Warrior('DarkJohanDu63');
  hero2: Hero = new Warrior('TristanLeConquerant');
  hero4: Hero = new Warrior('Flomas');
  hero5: Hero = new Warrior('Pierre-Sylvain');
  heroes: Hero[] = [
    this.hero,
    this.hero2,
    new Mage('ClémentLeBlanc'),
    new Rogue('Thovien'),
    this.hero4,
    this.hero5,
  ];

  lifeLoss(hero: Hero): void {
    hero.currentLifePoint -= 50;
  }
}
