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

  imporFromGTable(): Observable<Status> {
    return this.http.post<Status>('/api/devices/import', {});
  }
  addDevice(device: DeviceInfo): Observable<Status> {
    return this.http.post<Status>('/api/devices', device);
  }
  updateState(): Observable<boolean[]> {
    return this.http.get<boolean[]>('/api/devices/update_state');
  }

  getDevices() {
    return this.http.get<any[]>('/api/devices');
  }
}
