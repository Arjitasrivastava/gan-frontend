import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/registration.service';
import { Admin } from '../model/admin';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  msg = '';
  admin = new Admin();
  adminId;
  authRequest:{
    "userName": string,
    "password": string
  };

  constructor(private _service: RegistrationService, 
    private _router: Router,
    private _authService: AuthService) { }

  ngOnInit(): void {
  }

  loginAdmin(){
    this.authRequest = {
      "userName": this.admin.emailId,
      "password": this.admin.password
    }
    this._service.generateAdminToken(this.authRequest).subscribe(
      data => {
        console.log("Token => " + data)
        this._authService.storeJwtAdminToken(data)
        this.adminId = jwt_decode(data).jti;     
      },
      error => {
        this.msg = 'Bad Credentials, Please Enter correct Email and Password';
        return;
      },
      ()=>{
        this._service.getAdminFromRemote(this.adminId).subscribe(
          data => {
            console.log(data)
            console.log("response recieved");
            this._router.navigate(['/adminhome']);
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
