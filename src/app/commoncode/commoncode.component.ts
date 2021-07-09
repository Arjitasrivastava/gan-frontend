import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-commoncode',
  templateUrl: './commoncode.component.html',
  styleUrls: ['./commoncode.component.css']
})
export class CommoncodeComponent implements OnInit {

  constructor(private _router: Router,
    private _authService: AuthService) { }

  ngOnInit(): void {
  }

  signOut(){
    this._authService.logout();
    this._router.navigate(['/']);
  }

}
