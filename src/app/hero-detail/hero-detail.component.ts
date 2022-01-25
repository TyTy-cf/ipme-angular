import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../models/hero";
import {UtilityService} from "../../service/utility.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit{

  @Input()
  hero: Hero|undefined;

  constructor(public utilityService: UtilityService) { }

  ngOnInit(): void {
    this.hero?.levelUp();
  }

}
