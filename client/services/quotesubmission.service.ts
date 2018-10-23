import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";




@Injectable({
  providedIn: 'root'
})
export class QuotesubmissionService { 
  
  constructor(private http:HttpClient) { }
  sendquotes(formdata){
    var headers = new Headers() //.set('Content-Type', 'multipart/form-data')
    headers.append('Content-Type', 'multipart/form-data');
    console.log(formdata);
    return this.http.post('http://localhost:3000/upload', formdata );//, {headers: headers })
    
  }
  sendquotes2(formobj){
    console.log(formobj);
    return this.http.post('http://localhost:3000/upload2', formobj);//, {headers: headers })

  }
}
