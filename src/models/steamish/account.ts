
export class Account {

  private _id!: string;
  private _nickname: string = '';
  private _email: string = '';
  private _name: string = '';
  private _libraries: string[] = [];
  private _wallet: number = 0;

  set id(value: string) {
    this._id = value;
  }

  get id(): string {
    return this._id;
  }

  get libraries(): string[] {
    return this._libraries;
  }

  set libraries(value: string[]) {
    this._libraries = value;
  }

  get nickname(): string {
    return this._nickname;
  }

  set nickname(value: string) {
    this._nickname = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get wallet(): number {
    return this._wallet;
  }

  set wallet(value: number) {
    this._wallet = value;
  }
}
