import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProfileuploadComponent } from 'src/app/dialogs/profileupload/profileupload.component';
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
  
  //Form Defination
  profileForm= this.formBuild.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    tel: ['',Validators.required],
    address: ['',Validators.required],
    sex: ['', Validators.required]
  });

  constructor(private authService: AuthenticationService,
    private genderService: GenderAPIService,
    private formBuild: FormBuilder,
    private dialog: MatDialog) { }

  async ngOnInit() {
    this.getCurrentUser();
    await this.getGenderData();
  }

  openUploadDialog(){
    const dialogRef = this.dialog.open(ProfileuploadComponent);
    dialogRef.afterClosed().subscribe(result=>{
      console.log("Close Data Completed");
    });
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
      let formdata = this.profileForm.controls;
      formdata.firstname.setValue(this.user.user.firstname);
      formdata.lastname.setValue(this.user.user.lastname);
      formdata.email.setValue(this.user.user.email);
      formdata.address.setValue(this.user.user.address);
      formdata.tel.setValue(this.user.user.tel);
      formdata.sex.setValue(this.user.user.sex);
    })
  }

}
