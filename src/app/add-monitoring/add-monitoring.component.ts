import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-monitoring',
  templateUrl: './add-monitoring.component.html',
  styleUrls: ['./add-monitoring.component.css']
})
export class AddMonitoringComponent implements OnInit {
  isLinear = true;
  hostForm: FormGroup;
  deviceForm: FormGroup;
  platformForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.hostForm = this.formBuilder.group({
      ip: ['', Validators.required]
    });
    this.deviceForm = this.formBuilder.group({
      //secondCtrl: ['', Validators.required]
    });
    this.platformForm = this.formBuilder.group({
      //secondCtrl: ['', Validators.required]
    });
  }

}
