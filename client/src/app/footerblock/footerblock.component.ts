import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-footerblock',
  templateUrl: './footerblock.component.html',
  styleUrls: ['./footerblock.component.css']
})
export class FooterblockComponent implements OnInit {

  modalForm: FormGroup;
  public map: any = { lat: 51.678418, lng: 7.809007 };
  constructor(public fb: FormBuilder) {
    this.modalForm = fb.group({
      modalFormNameEx: ['', Validators.required],
      modalFormEmailEx: ['', [Validators.email, Validators.required]],
      modalFormSubjectEx: ['', Validators.required],
      modalFormTextEx: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

}
