import { Component, OnInit } from '@angular/core';
import { DevicesService, DeviceInfo } from '../devices.service';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-devices-view',
  templateUrl: './devices-view.component.html',
  styleUrls: ['./devices-view.component.css']
})
export class DevicesViewComponent implements OnInit {
  displayedColumns: string[] = ['name', 'host', 'login', 'password', 'state'];
  devices: DeviceInfo[];
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private service: DevicesService,
  ) {
    iconRegistry.addSvgIcon('connected',
        sanitizer.bypassSecurityTrustResourceUrl('assets/connect_on.svg')
    );
    iconRegistry.addSvgIcon('disconnected',
      sanitizer.bypassSecurityTrustResourceUrl('assets/connect_off.svg')
    );
    iconRegistry.addSvgIcon('plus',
      sanitizer.bypassSecurityTrustResourceUrl('assets/plus.svg')
    );
    iconRegistry.addSvgIcon('update',
      sanitizer.bypassSecurityTrustResourceUrl('assets/update.svg')
    );
  }
  animal: string;
  name: string;

  onAdd(): void{

  }
  onUpdate(){
    this.service.imporFromGTable().subscribe(status =>
      console.log(status)
    );
  }
  ngOnInit(): void {
    this.service.listDevices().subscribe(response => {
      this.devices =  response.map(device => {
        return new DeviceInfo(
          device.id,
          device.name,
          device.host,
          device.login,
          device.password,
          device.state
        );
      });
    });
  }
}
