import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Config } from '../models/Config.model';
import { UserAuth } from '../models/UserAuth.model'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any> | undefined;
  public currentUser: Observable<any> | undefined;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue() {
     return this.currentUserSubject?.value;
   }

   login(email: string, password: string){
        return this.http.post<any>(new Config().baseURL + "/api/auth", {email, password})
        .pipe(map(user=>{
          localStorage.setItem('currentUser',JSON.stringify(user));
          this.currentUserSubject?.next(user);
          return(user);
        }));
   }
   
   logout(){
     localStorage.removeItem('currentUser');
     this.currentUserSubject?.next(null);
     window.location.reload(true)
   }

}
