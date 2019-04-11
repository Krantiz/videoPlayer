import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { FormsModule } from '@angular/forms';
import { RequestHandlrService } from './request-handlr.service';   // our custom service, see below
import { DataService } from './data.service';   // our custom service, see below

import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideosListComponent } from './videos-list/videos-list.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    VideosListComponent
  ],
  imports: [
  	BrowserModule,
  	FormsModule,
  	HttpClientModule
  ],
  providers: [RequestHandlrService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
