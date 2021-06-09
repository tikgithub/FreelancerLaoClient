import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Gender } from 'src/app/models/Gender.model';
import { GenderAPIService } from 'src/app/services/gender-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //create form control
  registerForm = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    sex: ['', Validators.required],
    tel: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
  });

  genders = Array<Gender>(); // for assign list of gender from api

  submited: boolean = false; // for check user has click submit or not


  constructor(private formBuilder: FormBuilder, private genderService: GenderAPIService) { }

  async ngOnInit() {
    await this.getAllGender();
  }

  //Sync function to call API for getting gender data
  getAllGender = ()=>{
    return new Promise((resovled, reject)=>{
      this.genderService.getAll().subscribe((data:any)=>{
        this.genders = data;
        return resovled(this.genders);
      });
    });
  }

  onSubmit(): void {
    //When Form data is valid
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
    }
    
  }

}
