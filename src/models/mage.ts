import {Hero} from "./hero";

export class Mage extends Hero {

  constructor(name: string) {
    super(name, 510, 89, 10,18, 'assets/images/rpg/hero/mage.png', '#21f3ff', '#282828');
  }

  levelUp(): void {
    super.levelUp();
    this.currentLifePoint += 64;
    this.lifePointMax += 64;
  }
}
