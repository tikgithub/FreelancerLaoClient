import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Config } from '../models/Config.model';
import { UserAuth } from '../models/UserAuth.model'
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any> | undefined;
  public currentUser: Observable<any> | undefined;
  //Check Login status
  private loggedIn = new BehaviorSubject<boolean>(false);
  //private loggedIn: Observable<>a

  private currentUserSource = new ReplaySubject<UserAuth>(1);
  currentUser$ = this.currentUserSource.asObservable();


  constructor(private http: HttpClient, private router: Router) {
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
          this.currentUserSource.next(user);
          this.loggedIn.next(true);
          return(user);
        }));
   }

   setCurrentUser(user: UserAuth){
      this.currentUserSource.next(user);
   }

   get isLoggedIn(){
     return this.loggedIn.asObservable();
   }

   loggIn() {
    this.loggedIn.next(false);
   }
   
   logout(){
     localStorage.removeItem('currentUser');
     this.currentUserSubject?.next(null);
     this.currentUserSource?.next(null!);
     this.loggedIn.next(false);
     this.router.navigate(['/login']);
   }

}
