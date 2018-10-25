import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LineCard } from './LineCard';

@Injectable({
  providedIn: 'root'
})
export class LineCardDataService {

  private url = '../assets/LineCardInfo.json';

  constructor(private http: HttpClient) { }

  getLineCardDetails() {
    return this.http.get<LineCard[]>(this.url);
  }


}
