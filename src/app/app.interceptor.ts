import { Injectable } from "@angular/core";
import { RequestHandlrService } from './request-handlr.service';   // our custom service, see below
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";


import { Observable } from "rxjs/Observable";
@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(public requestHandlrService: RequestHandlrService) {}

  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'source': 'something',
        "Content-Type": "application/json"
      }
    });
    return next.handle(request);
  }
}
