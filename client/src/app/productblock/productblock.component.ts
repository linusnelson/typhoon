import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productblock',
  templateUrl: './productblock.component.html',
  styleUrls: ['./productblock.component.css']
})
export class ProductblockComponent implements OnInit {
  private flipindicator = false;
  private frontindicator = true;
  private flipindicator1 = false;
  private frontindicator1 = true;
  private flipindicator2 = false;
  private frontindicator2 = true;
  private count = 0;
  constructor() {

    
   }

  ngOnInit() {
    setInterval(() => { this.onclick(); }, 1000 * 4);
    
  }
 
  onclick(){
   
    if(this.flipindicator == false){
      this.flipindicator = true;
    }
    else{
      this.flipindicator=false;
      
    }
   
  }
  onclick1(){
   
    if(this.flipindicator1 == false){
      this.flipindicator1 = true;
    }
    else{
      this.flipindicator1=false;
      
    }
   
  }
  onclick2(){
   
    if(this.flipindicator2 == false){
      this.flipindicator2 = true;
    }
    else{
      this.flipindicator2=false;
      
    }
   
  }
}
