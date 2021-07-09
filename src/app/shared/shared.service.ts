import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private messageSource = new BehaviorSubject('null');
  private userName = new BehaviorSubject('null');
  
  private userId = new BehaviorSubject('null');

  currentMessage = this.messageSource.asObservable();
  currentName = this.userName.asObservable();
  
  currentUserId = this.userId.asObservable();

  constructor() { }

  changeMessage(message: string, name: string) {
    this.messageSource.next(message);
    this.userName.next(name);
  }

  

  changeUserId(id: string){
    this.userId.next(id);
  }

}
