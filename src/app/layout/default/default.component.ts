import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HeaderComponent } from 'src/app/widget/header/header.component';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onActivate(event: any): void{
    console.log("CanActive do something")
    let headerFunc = new HeaderComponent(this.authService);
    headerFunc.triggerFunction();
  }

}
