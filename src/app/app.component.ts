import { Component, OnInit } from '@angular/core';
import { UserAuth } from './models/UserAuth.model';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FreeLanerLaoClient';

constructor(private authenService: AuthenticationService){}
  ngOnInit(): void {
    this.setCurrentUser();
  }
  

setCurrentUser(){
  const user : UserAuth =JSON.parse(localStorage.getItem("currentUser")!);
  this.authenService.setCurrentUser(user);
} 

}
