import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-contactuscomponent',
  templateUrl: './contactuscomponent.component.html',
  styleUrls: ['./contactuscomponent.component.css']
})
export class ContactuscomponentComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
