import { Component, OnInit } from '@angular/core';
import { DevicesService, DeviceInfo } from '../devices.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import {AddDeviceComponent } from '../add-device/add-device.component';
import { Observable, from } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-platform-list',
  templateUrl: './platform-list.component.html',
  styleUrls: ['./platform-list.component.css']
})
export class PlatformListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'os', 'arch', 'compiler', 'target'];
  platforms = [];
  constructor(
    private sanitizer: DomSanitizer,
    private iconRegistry: MatIconRegistry,
    private service: DevicesService,
    public dialog: MatDialog,
  ) {
    iconRegistry.addSvgIcon('plus',
      sanitizer.bypassSecurityTrustResourceUrl('assets/plus.svg')
    );
  }
  onAdd(): void {
    const dialogRef = this.dialog.open(AddDeviceComponent, {
      id: 'add-device-id'
    });
  }

  loadPlatforms() {
    this.service.getPlatforms().subscribe(responce => {
      this.platforms = responce.data;
    });
  }
  ngOnInit(): void {
    this.loadPlatforms();
  }

}
