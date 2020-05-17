import { Component, OnInit } from '@angular/core';
import { DevicesService, DeviceInfo } from '../devices.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { AddMonitoringComponent } from '../add-monitoring/add-monitoring.component';
import { Observable, from } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-installed-controllers',
  templateUrl: './installed-controllers.component.html',
  styleUrls: ['./installed-controllers.component.css']
})
export class InstalledControllersComponent implements OnInit {

  displayedColumns: string[] = ['Device', 'IP', 'Login', 'State'];
  data: [any[]];
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
  }
  onAdd(): void {
    const dialogRef = this.dialog.open(AddMonitoringComponent, {
      id: 'add-device-id'
    });
  }
  onImport(){
    this.service.imporFromGTable().subscribe(status => {
      console.log(JSON.stringify(status));
    });
  }
  onUpdateState(){
    this.service.updateState().subscribe(responce => {
      if (responce.status.code) {
        console.log(responce);
        return;
      }
      responce.data.map( (value, pos) => { this.data[pos][3] = value; });
    });
  }
  loadDevices() {
    this.service.getDevices().subscribe(responce => {
      this.data = responce.data;
    });
  }
  ngOnInit(): void {
    this.loadDevices();
  }

}
