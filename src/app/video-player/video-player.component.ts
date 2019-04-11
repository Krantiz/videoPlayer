import { Component, OnInit, Input  } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { DataService } from '../data.service';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  videoUrl: any = 'https://www.youtube.com/embed/tgbNymZ7vqY';
  data:any;
  constructor(private sanitizer:DomSanitizer, private dataService:DataService){}

  ngOnInit() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
    this.data = this.dataService.getData();
  }

}
