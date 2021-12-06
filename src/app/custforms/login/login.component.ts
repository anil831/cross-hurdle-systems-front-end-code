import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  login!:FormGroup;
  constructor(private _formBuilder:FormBuilder,private _AccountService:AccountService,private _router:Router) { 
    this.login=this._formBuilder.group({
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required]]
    })
  }
  

  ngOnInit(): void {
   
  }
  get email(){
    return this.login.get('email');
  }
  get password(){
    return this.login.get('password');
  }
  onSubmit(){
    this._AccountService.loginUser(this.login.value).subscribe(res=>{
      console.log(res);
      localStorage.setItem('token',res.token);
      this._router.navigate((['/home']))
    },
    err=>{
      console.log(err.error);
      alert(err.error);
    })
  }
}
