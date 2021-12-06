import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  signupUrl:string=" http://localhost:3000/app/signup";
  loginUrl:string=" http://localhost:3000/app/login";

  constructor(private http:HttpClient) { }

  signup(user:Object):Observable<any>{
    return this.http.post(this.signupUrl,user);
  }
  loginUser(user:Object):Observable<any>{
    return this.http.post(this.loginUrl,user);
  }
  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

  
}
