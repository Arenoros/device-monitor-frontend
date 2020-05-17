import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-monitoring',
  templateUrl: './add-monitoring.component.html',
  styleUrls: ['./add-monitoring.component.css']
})
export class AddMonitoringComponent implements OnInit {
  isLinear = true;
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
