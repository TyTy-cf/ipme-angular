import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Account} from "../models/steamish/account";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  rawUrl: string = 'https://steam-ish.test-02.drosalys.net/api/';
  headers: {headers: HttpHeaders} = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(private httpClient: HttpClient) { }

  postAccount(account: Account): void {
    const body = {
      // JSONyfication de votre objet
    }
    this.httpClient.post(
      this.rawUrl + '/accounts',
      body,
      this.headers);
  }
}
