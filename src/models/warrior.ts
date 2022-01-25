import {Hero} from "./hero";

export class Warrior extends Hero {

  constructor(name: string) {
    super(name, 580, 64, 20,15, 'assets/images/rpg/hero/warrior.png', '#5b0909', '#ffffff');
  }

  levelUp(): void {
    super.levelUp();
    this.currentLifePoint += 84;
    this.lifePointMax += 84;
  }

}
