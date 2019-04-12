import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';  // replaces previous Http service
import { FormsModule } from '@angular/forms';
import { RequestHandlrService } from './request-handlr.service';   // our custom service, see below

import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { AppInterceptor } from './app.interceptor';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    VideosListComponent,
    LoaderComponent
  ],
  imports: [
  	BrowserModule,
  	FormsModule,
  	HttpClientModule
  ],
  providers: [
    RequestHandlrService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
