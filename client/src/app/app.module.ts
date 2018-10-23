import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,  NO_ERRORS_SCHEMA} from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { NavcomponentComponent } from './navcomponent/navcomponent.component';
import { ProductblockComponent } from './productblock/productblock.component';
import { LinecardblockComponent } from './linecardblock/linecardblock.component';
import { ProductenqblockComponent } from './productenqblock/productenqblock.component';
import { FooterblockComponent } from './footerblock/footerblock.component';
import {QuotesubmissionService } from '../../services/quotesubmission.service'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FilterPipe } from './filter.pipe';
//import { FormBuilder } from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { NavbodycomponentComponent } from './navbodycomponent/navbodycomponent.component';
import { ContactuscomponentComponent } from './contactuscomponent/contactuscomponent.component';
import { LineCardDetailsComponent } from './line-card-details/line-card-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavcomponentComponent,
    ProductblockComponent,
    LinecardblockComponent,
    ProductenqblockComponent,
    FooterblockComponent,
    FilterPipe,
    NavbodycomponentComponent,
    ContactuscomponentComponent,
    LineCardDetailsComponent,
    HomePageComponent,
    ProductsDetailsComponent,
    AboutUsPageComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    MDBBootstrapModule.forRoot(),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ QuotesubmissionService],
 // declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);