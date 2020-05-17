import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule, NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { DevicesViewComponent } from './devices-view/devices-view.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { PlatformListComponent } from './platform-list/platform-list.component';
import { InstalledControllersComponent } from './installed-controllers/installed-controllers.component';
import { AddMonitoringComponent } from './add-monitoring/add-monitoring.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    DevicesViewComponent,
    AddDeviceComponent,
    PlatformListComponent,
    InstalledControllersComponent,
    AddMonitoringComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: InstalledControllersComponent },
      { path: 'devices', component: DevicesViewComponent },
      { path: 'platforms', component: PlatformListComponent },
      { path: 'installed', component: InstalledControllersComponent }
    ]),
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbButtonsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatStepperModule
  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule { }
