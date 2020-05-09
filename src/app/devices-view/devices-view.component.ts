import { Component, OnInit } from '@angular/core';
import { DevicesService, DeviceInfo } from '../devices.service';


@Component({
  selector: 'app-devices-view',
  templateUrl: './devices-view.component.html',
  styleUrls: ['./devices-view.component.css']
})
export class DevicesViewComponent implements OnInit {
  displayedColumns: string[] = ['name', 'host', 'status'];
  devices: DeviceInfo[];
  constructor(
    private service: DevicesService,
  ) { }

  ngOnInit(): void {
    this.service.listDevices().subscribe(response => {
      this.devices =  response.map(device => {
        return new DeviceInfo(
          device.id,
          device.name,
          device.host,
          device.status
        );
      });
    });
  }
}
