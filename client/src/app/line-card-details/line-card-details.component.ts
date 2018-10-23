import { Component, OnInit } from '@angular/core';
import { LineCardDataService } from '../line-card-data.service';

@Component({
  selector: 'app-line-card-details',
  templateUrl: './line-card-details.component.html',
  styleUrls: ['./line-card-details.component.scss']
})
export class LineCardDetailsComponent implements OnInit {

  lineCards = [];

  constructor(private lineCardService: LineCardDataService) { }

  ngOnInit() {
    this.lineCardService.getLineCardDetails()
      .subscribe(data => this.lineCards = data);
  }

}
