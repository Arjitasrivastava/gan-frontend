import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly JWT_ADMIN_TOKEN = 'JWT_ADMIN_TOKEN';
 
  constructor() { }
 
  getJwtToken() {
    return sessionStorage.getItem(this.JWT_TOKEN);
  }
 
  public storeJwtToken(jwt: string) {
    sessionStorage.setItem(this.JWT_TOKEN, jwt);
  }

  getJwtAdminToken() {
    return sessionStorage.getItem(this.JWT_ADMIN_TOKEN);
  }
 
  public storeJwtAdminToken(jwt: string) {
    sessionStorage.setItem(this.JWT_ADMIN_TOKEN, jwt);
  }
 
  public isLoggedIn(){
    return !!sessionStorage.getItem(this.JWT_TOKEN);
  }
 
  public logout() {
    sessionStorage.removeItem(this.JWT_TOKEN);
  }


  public isLoggedInAdmin(){
    return !!sessionStorage.getItem(this.JWT_ADMIN_TOKEN);
  }
 
  public logoutAdmin() {
    sessionStorage.removeItem(this.JWT_ADMIN_TOKEN);
  }
 
}