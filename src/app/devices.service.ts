import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class DeviceInfo {
  id: number;
  name: string;
  ip: string;
  login: string;
  password: string;
  state: boolean;

  constructor(id: number, name: string, ip: string, login: string, password: string, state: boolean) {
    this.id = id;
    this.name = name;
    this.ip = ip;
    this.login = login;
    this.password = password;
    this.state = state;
  }
}
export class Status {
  code: number;
}
export class Responce {
  status: Status;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  constructor(
    private http: HttpClient
  ) { }
  listDevices() {
    return this.http.get('/api/devices');
  }

  imporFromGTable() {
    return this.http.post<Responce>('/api/devices/import', {});
  }
  addDevice(device: DeviceInfo){
    return this.http.post<Responce>('/api/devices', device);
  }
  updateState() {
    return this.http.get<Responce>('/api/devices/update_state');
  }

  getDevices() {
    return this.http.get<Responce>('/api/devices');
  }
  getPlatforms(){
    return this.http.get<Responce>('/api/platforms');
  }
}
