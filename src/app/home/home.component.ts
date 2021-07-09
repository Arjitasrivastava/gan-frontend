import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName: string


  constructor(private _idservice: SharedService){ }

  ngOnInit(): void {
    this._idservice.currentName.subscribe(message => this.userName = message);
  }

  

}
