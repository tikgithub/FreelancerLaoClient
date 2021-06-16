import { Component, ElementRef, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {EventEmitter} from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TestAPIService } from 'src/app/services/test-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  //For holding email from query
  email: string = "";

  //Handle loading indicator
  isLoading: boolean = false;

  //Handle submit event
  isSubmited: boolean = false;

  //Define FormGroup
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.maxLength(12)]]
  });

  //Event emitter to navbar 
  @Output()
  loginStatus: EventEmitter<any>= new EventEmitter<any>();

  constructor(private activeRoute: ActivatedRoute,
    private element: ElementRef,
    private formBuilder: FormBuilder,
    private testAPI: TestAPIService,
    private loginService: AuthenticationService,
    private router: Router) { }

  //get query params from URL
  getQueryParam = () => {
    return new Promise((resovled, reject) => {
      this.activeRoute.queryParams.subscribe(params => {
        this.email = params['email']
        console.log(this.email);
        return resovled(this.email);
      });
    });
  }

  sendLogin(){
    return new Promise((resovled, reject)=>{
      this.loginService.login(this.loginForm.controls.email.value,this.loginForm.controls.password.value).subscribe((data)=>{
        return resovled(data);
      },(err)=>{
        return reject(err);
      });
    });
  }

  async ngOnInit() {

    await this.getQueryParam();
  }

  ngAfterViewInit() {
  }

  get f() {
    return this.loginForm.controls;
  }

  async onSubmitLogin() {
    try {
      this.isLoading = true;
      this.isSubmited = true;
      if (this.loginForm.invalid) {
        this.isLoading = false;
        return;
      }
      await this.sendLogin();

      this.isSubmited = false;
      this.isLoading=false;
      this.router.navigate(['/']);
    } catch (error) {
      this.isSubmited = false;
      this.isLoading = false;
    }
  }
}
