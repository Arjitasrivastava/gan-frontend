import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { RegistrationService } from '../service/registration.service';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { AuthService } from '../service/auth.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';
  userId;
  authRequest:{
    "userName": string,
    "password": string
  };

  constructor(private _service : RegistrationService, 
    private _router: Router, 
    private _idservice: SharedService,
    private _authService: AuthService) { }

  ngOnInit(): void {
  }

  newMessage(id: string, name: string) {
    this._idservice.changeMessage(id, name);
  }

  loginUser(){
    this.authRequest = {
      "userName": this.user.emailId,
      "password": this.user.password
    }
    this._service.generateToken(this.authRequest).subscribe(
      data => {
        console.log("Token => " + data)
        this._authService.storeJwtToken(data)
        this.userId = jwt_decode(data).jti;       
      },
      error => {
        this.msg = 'Bad Credentials, Please Enter correct Email and Password';
        return;
      },
      ()=>{
        this._service.getUserFromRemote(this.userId).subscribe(
          data => {
            console.log(data)
            this.newMessage(data["id"].toString(), data["firstName"]);
            console.log("response recieved");
            this._router.navigate(['/home'])
          },
          error => {
            console.log(error)
            console.log("exception occured");
            this.msg = 'Bad Credentials, Please Enter Email and Password';
          }
        )
      }
    )
  }
}
