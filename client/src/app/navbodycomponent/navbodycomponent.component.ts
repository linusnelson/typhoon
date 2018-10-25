import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbodycomponent',
  templateUrl: './navbodycomponent.component.html',
  styleUrls: ['./navbodycomponent.component.css']
})
export class NavbodycomponentComponent implements OnInit {

  writeToUs: FormGroup;
  // tslint:disable-next-line:no-inferrable-types
  url: string = 'http://localhost:3000/writeus';

  constructor(private fb: FormBuilder, private http: HttpClient, private toastr: ToastrService) {
    this.writeToUs = fb.group({
      'name': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'message': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  formSubmit(values) {
    const data = {
    'name' : values.name,
    'email' : values.email,
    'message' : values.message
    };
    this.http.post(this.url, data ).subscribe( data => {
      if ( data['error_code'] === 0 ) {
        this.toastr.success('Glad to hear from you. Your concerns will be addressed.', 'Message Sent!',{
          tapToDismiss: true,
          closeButton: true
        });
      } else {
        this.toastr.error('error Occured');
      }

   });

  }

}
