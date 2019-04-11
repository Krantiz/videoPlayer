import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'source': 'something' })
};
 
@Injectable()
export class RequestHandlrService {
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
    getVideosFromServer() {
        let response = this.http.get('https://valuefy-assignment-x.herokuapp.com/api/getVideos', httpOptions);
        console.log(response);
        return response;

    }
}