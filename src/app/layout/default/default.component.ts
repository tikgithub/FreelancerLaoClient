import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HeaderComponent } from 'src/app/widget/header/header.component';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit { 

  islogin?: Observable<boolean>;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.islogin = this.authService.currentUserValue;
  }

}
