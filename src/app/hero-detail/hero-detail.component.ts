import {Component, Input} from '@angular/core';
import {Hero} from "../../models/hero";
import {UtilityService} from "../../service/utility.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {

  @Input()
  hero: Hero|undefined;

  constructor(public utilityService: UtilityService) { }

}
