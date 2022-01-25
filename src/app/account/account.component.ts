import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../service/account.service";
import {Account} from "../../models/steamish/account";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    let account = new Account();
    account.email = 'darkjojo@salt.lol';
    account.nickname = 'xXx-DarKojo-xXx';
    account.name = 'DarkJoJo63xoxoxoxox';
    this.accountService.postAccount(account).subscribe((newAccount) => {
      console.log(newAccount);
    });
  }

}
