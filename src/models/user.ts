
export class User {

  private _firstName: string = '';
  private _lastName: string = '';
  private _email: string = '';
  private _nbSubmission = 0;

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get nbSubmission(): number {
    return this._nbSubmission;
  }

  set nbSubmission(value: number) {
    this._nbSubmission = value;
  }
}
