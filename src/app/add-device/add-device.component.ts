import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DevicesService } from '../devices.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent {
  controllerForm = this.fb.group({
    name: [null, Validators.required],
    ip: ['10.0.6.0', Validators.required],
    protocol: ['ssh', Validators.required],
    login: ['root', Validators.required],
    password: null,
    comment: [null, Validators.required],
  });

  hasUnitNumber = false;
  protocols = [
    {name: 'SSH', abbreviation: 'ssh'},
  ];
  constructor(
    private fb: FormBuilder,
    private service: DevicesService,
  ) {}

  onAdd() {
    this.service.addDevice(this.controllerForm.value).subscribe(status => {
      console.log(JSON.stringify(status));
    });
  }
}
