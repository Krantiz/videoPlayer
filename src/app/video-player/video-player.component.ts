import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  videoUrl: any;
  Url: any;

  constructor(private sanitizer:DomSanitizer){}

  ngOnInit() {
  }

  sendData(data: any) {
	    console.log('I am from home component');
	    console.log(data);
      // data = this.sanitizer.bypassSecurityTrustResourceUrl(data);
      // this.videoUrl = this.sanitizer.bypassSecurityTrustUrl(data);
	}
  

}
