import { Component, OnInit } from '@angular/core';
import { DevicesService, DeviceInfo } from '../devices.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import {AddDeviceComponent } from '../add-device/add-device.component';
import { Observable, from } from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-devices-view',
  templateUrl: './devices-view.component.html',
  styleUrls: ['./devices-view.component.css']
})
export class DevicesViewComponent implements OnInit {
  displayedColumns: string[] = ['name', 'ip', 'login', 'password', 'state'];
  devices: DeviceInfo[];
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private service: DevicesService,
    public dialog: MatDialog,
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
  onAdd(): void {
    const dialogRef = this.dialog.open(AddDeviceComponent, {
      id: 'add-device-id'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  onImport(){
    this.service.imporFromGTable().subscribe(status => {
      console.log(JSON.stringify(status));
    });
  }
  onUpdateState(){
    this.service.updateState().subscribe(status => {
      status.map( (value, pos) => { this.devices[pos].state = value; });
      console.log(status);
    });
  }
  loadDevices() {
    this.service.getDevices().subscribe(data => {
      this.devices = [];
      data.forEach((row) => {
        row[1].id = row[0];
        this.devices.push(row[1]);
      });
    });
  }
  ngOnInit(): void {
    this.loadDevices();
  }
}
