import { Component, OnInit } from '@angular/core';
import { ProductCardService } from '../product-card.service';
import {FilterPipe} from '../filter.pipe';
//import { FormsModule } from '@angular/forms';
//import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
  providers: [ FilterPipe ]
})
export class ProductsDetailsComponent implements OnInit {
  productCard=[];
  allproducts=[];
  resultproducts=[];
  searchText:string;
  searchFlag=false;
  productFlag=true;
  notfound:boolean = false;
  normalpostion: boolean = true;
  toppostion: boolean = false;
  found:boolean=false;
  constructor(private productCardService: ProductCardService, private filter : FilterPipe) { }

  ngOnInit() {
    this.productCardService.getProductCardDetails()
      .subscribe(data => this.productCard = data);
      setTimeout(()=>{
    this.productCard.forEach((value)=>{
      value.Product.forEach((lists)=>{
        lists.list.forEach((lis)=>{
          this.allproducts.push(lis.toLowerCase());
        
        })
      })
    })
    }, 2000);

    
    
  }

  // filter out all products that matches the keyword

  searchproduct(){
    this.notfound= false;
    if(this.searchText.length >=1 ){
      this.productFlag=false;
      this.searchFlag=true;
    }
    else{
      this.productFlag=true;
      this.searchFlag=false;
    }
   
    //this.found=false;
    this.resultproducts=this.filter.transform(this.allproducts,this.searchText);
    console.log(this.resultproducts);
    console.log(this.searchText.length > 4);
    console.log(this.resultproducts.length == 0);
   
      this.found=true;
      if(this.searchText.length >= 1 && this.resultproducts.length == 0){
      console.log('inside the notfound');
      this.notfound = true;
      this.found = false;
    }
    
  }
  transitionfun(){
    this.normalpostion=false;
    this.toppostion=true;
  }
  
 }


