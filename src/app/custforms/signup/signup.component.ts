import { Component, OnInit } from '@angular/core';

import { FormGroup,Validators,FormBuilder} from '@angular/forms';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup!:FormGroup;
  constructor(private _formBuilder:FormBuilder,private _AccountService:AccountService) { 
    this.signup=this._formBuilder.group({
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required]]
    })
  }
  

  ngOnInit(): void {
   
  }
  get email(){
    return this.signup.get('email');
  }
  get password(){
    return this.signup.get('password');
  }
  onSubmit(){
    this._AccountService.signup(this.signup.value).subscribe(res=>{
      console.log(res);
      localStorage.setItem('token',res.token);
    },
    err=>{
      console.log(err.error);
      alert(err.error)
    })
  }
}

