import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { RegistrationService } from '../service/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  toMailID = '';
  msg = '' ;
  status=0;

  constructor(private _service : RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  sendMail(){
    this._service.getForgotPasswordFromRemote(this.toMailID).subscribe(
      data => {
        console.log("response recieved");
        this.msg = "Check your mail Username and Password Sent"
        this.status = 200;
      },
      error => {
        console.log("exception occured when sending mail");
        console.log(error);
        console.log(error.error); 
        this.status = 500;
        this.msg = error.error.message;
        
      }
    )
  }
}
