import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { isUserLogin } from 'src/app/utils/objectUtil';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$!: Observable<boolean>;
  loggined: boolean = false;

  constructor(private authenService: AuthenticationService) {
    this.isLoggedIn$ = this.authenService.isLoggedIn;
  }

   ngOnInit() {
   this.getCurrntUser();
  }

  isLogin = ()=>{
    return new Promise(resovled=>{
      
    })
  }

  
  logOut() {

    this.authenService.logout();
    this.loggined=false;

  }

  getCurrntUser(){
    this.authenService.currentUser$.subscribe(user=>{
      this.loggined = !!user;
    })
  }


}
