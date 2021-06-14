import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { isUserLogin } from 'src/app/utils/objectUtil';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authenService: AuthenticationService) {
  }

  ngOnInit(): void {
    console.log('change time')
  }

  logOut() {
    this.authenService.logout();
  }
  ngOnChanges(){
    console.log('change time');
  }
  triggerFunction() {
    
  }

}
