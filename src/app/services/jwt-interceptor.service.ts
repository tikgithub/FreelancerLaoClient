import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import {isNullOrEmptyJson} from '../utils/objectUtil';
@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {
  allowURL = [
    '/login',
    '/register'
  ];
  constructor(private authService: AuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    console.log("JWT INTERNCEPTOR EXECUTE");
    let currentUser = this.authService.currentUserValue;
    
    if (isNullOrEmptyJson(currentUser)!=null) {
      console.log('token modify')
      req = req.clone({
        setHeaders: {
          Authorization: `bearer ${currentUser.user.token}`
        }
      });
    }
    return next.handle(req);
  }
  private isEmpty(object: any){
    return Object.keys(object).length === 0;
  }
}
