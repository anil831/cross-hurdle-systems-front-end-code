import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AccountService } from './custforms/account.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private _AccountService: AccountService,
    private _router: Router
  ) {}
  canActivate(): boolean {
    if (this._AccountService.isLoggedIn()) {
      return true;
    } else {
      this._router.navigate(['/login'])
      return false;
    }
  }
}
