import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class DeviceInfo {
  status: boolean;
  id: number;
  name: string;
  host: string;

  constructor(id: number, name: string, host: string, status: boolean) {
    this.id = id;
    this.name = name;
    this.host = host;
    this.status = status;
  }
}

export class Status {
  code: number;
}

const ELEMENT_DATA: DeviceInfo[] = [
  {id: 1, name: 'Hydrogen', host: '1.0079', status: true},
  {id: 2, name: 'Hydrogen', host: '1.0079', status: false},
  {id: 3, name: 'Hydrogen', host: '1.0079', status: false},
  {id: 4, name: 'Hydrogen', host: '1.0079', status: true},
];
@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(
    private http: HttpClient
  ) { }
  listDevices(): Observable<DeviceInfo[]> {
    return this.http.get<DeviceInfo[]>('/api/devices', {responseType: 'json'});
  }

  imporFromGTable(): Observable<Status> {
    return this.http.post<Status>('/api/devices/import', {responseType: 'json'});
  }
}
