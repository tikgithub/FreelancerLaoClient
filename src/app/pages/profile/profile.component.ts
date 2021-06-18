import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { GenderAPIService } from 'src/app/services/gender-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  firstname: string = "";
  lastname: string = "";
  genderData: any;

  constructor(private authService: AuthenticationService,
    private genderService: GenderAPIService) { }

  ngOnInit(): void {
    this.getCurrentUser();
    this.getGenderData();
  }

  getGenderData = ()=>{
    return new Promise((resovle, reject)=>{
      this.genderService.getAll().subscribe(data=>{
        this.genderData = data;
        return resovle(this.genderData);
      })
    });
  }

  getCurrentUser(){
    this.authService.currentUser$.subscribe(user=>{
      this.user = user;
      this.firstname = this.user.user.firstname;

    })
  }

}
