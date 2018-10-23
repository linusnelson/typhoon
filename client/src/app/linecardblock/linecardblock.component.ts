import { Component, OnInit } from '@angular/core';
import { LineCardDataService } from '../line-card-data.service';

@Component({
  selector: 'app-linecardblock',
  templateUrl: './linecardblock.component.html',
  styleUrls: ['./linecardblock.component.css']
})
export class LinecardblockComponent implements OnInit {

  lineCards = [];

  constructor(private lineCardService: LineCardDataService) { }

  ngOnInit() {
    this.lineCardService.getLineCardDetails()
      .subscribe(data => this.lineCards = data);
  }

}
