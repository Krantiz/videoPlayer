import { Component, OnInit, OnDestroy, Input, HostListener } from "@angular/core";
import {Observable} from 'rxjs/Rx';
import { RequestHandlrService } from './request-handlr.service';   // our custom service, see below

// Import this, and write at the top of your .ts file

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  foods: any;
  
  constructor( private RequestHandlrService: RequestHandlrService) { 

  }

	ngOnInit() {
	    this.getFoods();
	  }
 
  getFoods() {
   this.RequestHandlrService.getFoods().subscribe(
      data => { this.foods = data},
      err => console.error(err),
      () => console.log('done loading foods')
    );
  }
}
