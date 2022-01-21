import {Component, OnInit} from '@angular/core';
import {Hero} from "../../models/hero";
import {Warrior} from "../../models/warrior";
import {Rogue} from "../../models/rogue";
import {Mage} from "../../models/mage";
import {Title} from "@angular/platform-browser";
import {NavbarComponent} from "../navbar/navbar.component";
import {UtilityService} from "../../service/utility.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './yahtzee.component.html',
  styleUrls: ['./yahtzee.component.scss']
})
export class YahtzeeComponent implements OnInit {

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

  constructor(private title: Title, public utilityService: UtilityService) { }

  ngOnInit(): void {
    this.title.setTitle(NavbarComponent.pathHeroes);
  }

}
