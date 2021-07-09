import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
 
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
 
  constructor(private authService: AuthService,
    private router: Router) { }
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
    if (this.authService.getJwtToken()) {
      request = this.addToken(request, this.authService.getJwtToken());
    }

    if (this.authService.getJwtAdminToken()) {
      request = this.addToken(request, this.authService.getJwtAdminToken());
    }
 
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
        if(event instanceof HttpResponse){
 
        }
    }, (err: any) => {
        if(err instanceof HttpErrorResponse) {
            if (err.status === 401) {
                this.router.navigate(['/login'])
            }
        }
    }
    ))
  }
 
  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}