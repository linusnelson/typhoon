import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QuotesubmissionService } from 'services/quotesubmission.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-productenqblock',
  templateUrl: './productenqblock.component.html',
  styleUrls: ['./productenqblock.component.css']
})
export class ProductenqblockComponent implements OnInit {
  public data: any;
  private tab1value = true;
  private tab1value1 = false;
  private formindicator = true;
  private formindicator1 = false;
  public Products = {};
  selectedValue = [];
  //PartNumber: String;
  //Manfacture: String = null;
  //AnnualQuantity: String;
  //SampleQuantity: String;
  producttable = false;
  CustomerName: string;
  ProjectName: string;
  endapplication: string;
  startdate: string;
  Pilotstartdate: string;
  isdisabled=false;
  isspinner=false;

  Manufactures = [
    { id: 1, name: "United States" },
    { id: 2, name: "Australia" },
    { id: 3, name: "Canada" },
    { id: 4, name: "Brazil" },
    { id: 5, name: "England" },
  ];
  @ViewChild('myform')
  myInputVariable: ElementRef;
  @ViewChild('myform2')
  myInputVariable1: ElementRef;
  public tableheader = ['PartNumber', 'Manufacture', 'AnnualQuantity', 'SampleQuantity'];
  public ProductList: { PartNumber: String, Manfacture: String, AnnualQuantity: String, SampleQuantity: String }[] = [

  ];
  constructor(private http: HttpClient, private el: ElementRef, public quotesendservice: QuotesubmissionService,private toastr: ToastrService) {

  }

  ngOnInit() {
  }
  formindiupdate() {

    this.formindicator = true;
    this.formindicator1 = false;
    this.tab1value1=false;
    this.tab1value=true;
    
  }
  formindiupdate1() {
    this.formindicator = false;
    this.formindicator1 = true;
    this.tab1value1=true;
    this.tab1value=false;
  }
  
  form2submit() {
    console.log("inside a form submission");
    this.isdisabled=true;
    this.isspinner=true;
    let CustomerName: HTMLInputElement = this.el.nativeElement.querySelector('#customername');
    let ProjectName: HTMLInputElement = this.el.nativeElement.querySelector('#ProjectName');
    let endapplication: HTMLInputElement = this.el.nativeElement.querySelector('#endapplication');
    let startdate: HTMLInputElement = this.el.nativeElement.querySelector('#startdate');
    let Pilotstartdate: HTMLInputElement = this.el.nativeElement.querySelector('#pilotstart');
    //let CustomerName: HTMLInputElement = this.el.nativeElement.querySelector('#file');
    console.log(CustomerName)
    
    const form2obj = {
      "CustomerName": CustomerName.value,
      "ProjectName": ProjectName.value,
      "endapplication": endapplication.value,
      "startdate": startdate.value,
      "Pilotstartdate": Pilotstartdate.value,
      "ProductDetails": this.ProductList
    }
  
    this.quotesendservice.sendquotes2(form2obj).subscribe(data => {
    
        this.isdisabled=false;
        this.isspinner=false;
        if(data['error_code']==0){
          this.toastr.success('we will reach you soon', 'Your Quotes has been sent successfully',{
            tapToDismiss:true,
            closeButton: true
          });
        }
        else{
          this.toastr.error('error Occured');
        }
      this.myInputVariable1.nativeElement.reset();
      this.producttable=false;
      this.ProductList=[];

     });
  }

  change(e: any, type) {
    //console.log(e);
    console.log(e.target.checked, "dfksl");
    console.log(type);
    if (e.target.checked) {
      this.selectedValue.push(type);
    }
    else {
      let updateItem = this.selectedValue.find(this.findIndexToUpdate, type);

      let index = this.selectedValue.indexOf(updateItem);

      this.selectedValue.splice(index, 1);
    }
    console.log(this.selectedValue)
  }
  findIndexToUpdate(type) {
    console.log('type index');
    console.log(type);
    return type === this;
  }



  upload() {
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#file');
    let name: HTMLInputElement = this.el.nativeElement.querySelector('#name');
    let email: HTMLInputElement = this.el.nativeElement.querySelector('#email');
    let phoneno: HTMLInputElement = this.el.nativeElement.querySelector('#phoneno');
    this.isdisabled=true;
    this.isspinner=true;

    //get the total amount of files attached to the file input.
    let fileCount: number = inputEl.files.length;
    //create a new fromdata instance
    let formData = new FormData();
    //check if the filecount is greater than zero, to be sure a file was selected.
    if (fileCount > 0) { // a file was selected
      //append the key name 'photo' with the first file in the element
      formData.append('name', name.value);
      formData.append('email', email.value);
      formData.append('phoneno', phoneno.value);
      formData.append('file', inputEl.files.item(0));
      /* const uploaddata={
         'name': name.value,
         'email': email.value,
         'phoneno': phoneno.value,
       }*/

      console.log(name.value);
      //call the angular http method
      this.quotesendservice.sendquotes(formData).subscribe(data => {
        this.isdisabled=false;
        this.isspinner=false;
        console.log(data['error_code']);
        if(data['error_code']==0){
          this.toastr.success('we will reach you soon', 'Your Quotes has been sent successfully',{
            positionClass:'toast-top-right',
            tapToDismiss:true,
            closeButton: true
          });
        }
        else{
          this.toastr.error('error Occured');
        }
        this.myInputVariable.nativeElement.reset()
        
      });
    }



  }
  addProduct() {
    let PartNumber: HTMLInputElement = this.el.nativeElement.querySelector('#partno');
    let Manfacture: HTMLInputElement = this.el.nativeElement.querySelector('#manfacture');
    let AnnualQuantity: HTMLInputElement = this.el.nativeElement.querySelector('#annualquantity');
    let SampleQuantity: HTMLInputElement = this.el.nativeElement.querySelector('#samplequantity');
    const newprod = {
      "PartNumber": PartNumber.value,
      "Manfacture": Manfacture.value,
      "AnnualQuantity": AnnualQuantity.value,
      "SampleQuantity": SampleQuantity.value
    }

    this.ProductList.push(newprod);
    console.log(this.ProductList);
    if (this.ProductList.length > 0) {
      this.producttable = true;
    }
  }
  Deleteprod() {
    var i = 0;
    var k = 0;
    var j = 0;
    var temp = 0;
    if (this.selectedValue.length == this.ProductList.length) {
      this.producttable = false;

    }
    console.log('inside the delete');
    //console.log(this.ProductList);
    console.log('selected value');
    console.log(this.selectedValue);
    //const  localselectedvalue = this.selectedValue;
    //console.log(localselectedvalue);
    /*this.ProductList.forEach(function(value){
      this.localselectedvalue.forEach(function(value1){
         if(value1 == i){
           console.log('delete');
           console.log(i);
         }
      })
      i= i+1;
    });*/
    //var sortedindex=this.selectedValue.sort();
    var sortedindex = mysort(this.selectedValue);
    for (i = sortedindex.length - 1; i > -1; i--) {
      console.log(this.selectedValue[i]);
      this.ProductList.splice(sortedindex[i], 1);
    }
    this.selectedValue = [];
    function mysort(localarray) {
      for (k = 0; k < localarray.length / 2; k++) {
        for (i = 0; i < localarray.length; i++) {
          for (j = i + 1; j < localarray.length; j++) {
            if (localarray[i] > localarray[j]) {
              temp = localarray[j];
              localarray[j] = localarray[i];
              localarray[i] = temp;

            }
          }
        }

      }
      return localarray;
    }

  }


}
