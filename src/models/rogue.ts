import {Hero} from "./hero";

export class Rogue extends Hero {

  constructor(name: string) {
    super(name, 520, 77, 12,19, 'assets/images/rpg/hero/rogue.png', '#fffc65', '#3b3b3b');
    this.criticalStrikeRatio = 1.75;
  }

  levelUp(): void {
    super.levelUp();
    this.currentLifePoint += 71;
    this.lifePointMax += 71;
  }

}
