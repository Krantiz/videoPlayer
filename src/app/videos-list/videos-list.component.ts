import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
	@Output() trackChanged = new EventEmitter<any>();
  	constructor(private RequestHandlrService: RequestHandlrService) { }

	ngOnInit() {
		this.getVideos();
	}

  	playThis(url) {
  		this.trackChanged.emit({value: url});
  	}

  	getVideos() {
	   this.RequestHandlrService.getVideosFromServer().subscribe(
	      data => { this.videos = data},
	      err => console.error(err),
	      () => console.log('done loading foods')
	    );
	  }
 
	
}
