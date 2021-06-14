import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { TestAPIService } from 'src/app/services/test-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private testAPI: TestAPIService) { }
  ngOnInit(): void {
    this.test();
  }

  test(){
     this.testAPI.testAPI().subscribe((data: any)=>{
        console.log(data);
    });
  }

}
