import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private activeRoute: ActivatedRoute,
    private element: ElementRef,
    private formBuilder: FormBuilder) { }

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

  async ngOnInit() {
    
    await this.getQueryParam();
  }

  ngAfterViewInit(){
  }

}
