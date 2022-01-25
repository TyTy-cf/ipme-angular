import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Account} from "../models/steamish/account";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  rawUrl: string = 'https://steam-ish.test-02.drosalys.net/api/accounts';
  headers: {headers: HttpHeaders} = {
    headers: new HttpHeaders({
      'Content-Type': 'application/ld+json',
    })
  };

  constructor(private httpClient: HttpClient) { }

  postAccount(account: Account): Observable<Account> {
    const body = {
      'name': account.name,
      'nickname': account.nickname,
      'email': account.email,
      'wallet': account.wallet,
      'libraries': account.libraries,
    };
    return this.httpClient.post<Account>(this.rawUrl, body, this.headers);
  }
}
