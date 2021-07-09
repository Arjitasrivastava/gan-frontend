import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';


import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedService } from '../shared/shared.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'priority', 'requestType', 'updatedAt', 'projectName', 'travelCity', 'status', 'user.businessUnit'];
  
  flag = true;
  msg: string = "See Aprooved Ticket Too..";

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
 
  
  userIds: Array<number> = [];

  constructor(private _router: Router, 
    private _sharedService : SharedService,
    private _authService: AuthService) { }

  ngOnInit(): void {
    
  }

  signOut(){
    this._authService.logoutAdmin();
    this._router.navigate(['/']);
  }
}