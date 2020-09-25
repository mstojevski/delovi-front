import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './ad-create.component.html',
  styleUrls: ['./ad-create.component.scss']
})
export class AdCreateComponent implements OnInit {
  adCreateForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    brends: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    category: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    favorite: new FormControl('', Validators.required)
  });
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
