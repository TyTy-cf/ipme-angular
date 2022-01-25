
export abstract class Hero {

  protected _name: string = '';
  protected _level: number = 1;
  protected _lifePointMax: number = 0;
  protected _currentLifePoint: number = 0;
  protected _physicalPower: number = 0;
  protected _armor: number = 20;
  protected _criticalStrikeChance: number = 0;
  protected _criticalStrikeRatio: number = 1.5;
  protected _image: string = '';
  protected _backgroundColor: string = '';
  protected _color: string = '';
  protected _takenDamage: number = 0;

  protected constructor(name: string, lifePointMax: number, physicalPower: number, armor: number, criticalStrikeChance: number, image: string, background: string, color: string) {
    this._name = name;
    this._lifePointMax = lifePointMax;
    this._currentLifePoint = lifePointMax;
    this._physicalPower = physicalPower;
    this._armor = armor;
    this._criticalStrikeChance = criticalStrikeChance;
    this._image = image;
    this._backgroundColor = background;
    this._color = color;
  }

  get backgroundColor(): string {
    return this._backgroundColor;
  }

  set backgroundColor(value: string) {
    this._backgroundColor = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get level(): number {
    return this._level;
  }

  set level(value: number) {
    this._level = value;
  }

  get lifePointMax(): number {
    return this._lifePointMax;
  }

  set lifePointMax(value: number) {
    this._lifePointMax = value;
  }

  get currentLifePoint(): number {
    return this._currentLifePoint;
  }

  set currentLifePoint(value: number) {
    this._currentLifePoint = value;
  }

  get physicalPower(): number {
    return this._physicalPower;
  }

  set physicalPower(value: number) {
    this._physicalPower = value;
  }

  get armor(): number {
    return this._armor;
  }

  set armor(value: number) {
    this._armor = value;
  }

  get criticalStrikeChance(): number {
    return this._criticalStrikeChance;
  }

  set criticalStrikeChance(value: number) {
    this._criticalStrikeChance = value;
  }

  get criticalStrikeRatio(): number {
    return this._criticalStrikeRatio;
  }

  set criticalStrikeRatio(value: number) {
    this._criticalStrikeRatio = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  getPercentLife(): number {
    return (this.currentLifePoint/this.lifePointMax) * 100;
  }

  get takenDamage(): number {
    return this._takenDamage;
  }

  set takenDamage(value: number) {
    this._takenDamage = value;
  }

  takingDamage(damage: number): void {
    this.takenDamage = damage;
    this.currentLifePoint -= damage;
  }

  levelUp(): void {
    this._level++;
  }

}
