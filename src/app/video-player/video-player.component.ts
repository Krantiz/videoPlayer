import { Component, OnInit, Input  } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  videoUrl: any;
  data:any;
  constructor(private sanitizer:DomSanitizer){
  }

  ngOnInit() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/6ZfuNTqbHE8');
  }

  trackChanged(track){
    console.log(track.value);
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(track.value);
  }


}
