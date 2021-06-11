import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Gender } from 'src/app/models/Gender.model';
import { Register } from 'src/app/models/Register.model';
import { GenderAPIService } from 'src/app/services/gender-api.service';
import { RegisterAPIService } from 'src/app/services/register-api.service';

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
    password: ['', Validators.required]
  });

  genders = Array<Gender>(); // for assign list of gender from api

  submited: boolean = false; // for check user has click submit or not

  isLoading: boolean = false; // for handle loading indicator


  constructor(private formBuilder: FormBuilder,
    private genderService: GenderAPIService,
    private regsiterService: RegisterAPIService,
    private toastrService: ToastrService,
    private router: Router) { }

  async ngOnInit() {
    await this.getAllGender();
  }

  //Sync function to call API for getting gender data
  private getAllGender = () => {
    return new Promise((resovled, reject) => {
      this.genderService.getAll().subscribe((data: any) => {
        this.genders = data;
        return resovled(this.genders);
      });
    });
  }

  //Sync function to call API for register new user
  private saveNewUser = (req: Register) => {
    return new Promise((resovled, reject) => {
      this.regsiterService.add(req).subscribe((data: any) => {
        return resovled(data);
      }, (err) => {
        reject(err);
      });
    });
  }

  private resetLoading() {
    // Set submit complete status
    this.submited = false;
    // Set lading complete status
    this.isLoading = false;
  }

  get f() {
    return this.registerForm.controls;
  }

  async onSubmit() {
    //Submit form
    this.submited = true;
    //When Form data is valid
    if (this.registerForm.invalid) {
      return;
    }

    this.isLoading = true;
    try {
      //When form is valid
      //Create new Register object
      let regObj = new Register();
      let formData = this.registerForm.controls;
      //Assign Value to object
      regObj.userid = 0;
      regObj.firstname = formData.firstname.value;
      regObj.lastname = formData.lastname.value;
      regObj.sex = formData.sex.value;
      regObj.tel = formData.tel.value;
      regObj.email = formData.email.value;
      regObj.address = formData.address.value;
      regObj.password = formData.password.value;
      //Send Object to API
      await this.saveNewUser(regObj);
      this.resetLoading();
      this.toastrService.success("Register successful", "Done");
      //Go to login page
      this.router.navigate(['login'], { queryParams: { email: regObj.email } });
    } catch (error) {
      console.log(error);
      this.resetLoading();
      this.toastrService.error(error.error, "Error ! ");
    }

  }

}
