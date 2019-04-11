import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RequestHandlrService } from '../request-handlr.service';   // our custom service, see below


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'source': 'something' })
};

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {
	videos: any;

	ngOnInit() {
		this.getVideos();
	}

  	constructor(private RequestHandlrService: RequestHandlrService) {}

  	playThis(url) {
  		alert(url);
  	}

  	getVideos() {
	   this.RequestHandlrService.getVideosFromServer().subscribe(
	      data => { this.videos = data},
	      err => console.error(err),
	      () => console.log('done loading foods')
	    );
	  }
 
	
}
