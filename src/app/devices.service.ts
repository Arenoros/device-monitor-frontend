import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class DeviceInfo {
  id: number;
  name: string;
  host: string;
  login: string;
  password: string;
  state: boolean;

  constructor(id: number, name: string, host: string, login: string, password: string, state: boolean) {
    this.id = id;
    this.name = name;
    this.host = host;
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
  listDevices(): Observable<DeviceInfo[]> {
    return this.http.get<DeviceInfo[]>('/api/devices', {responseType: 'json'});
  }

  imporFromGTable(): Observable<Status> {
    return this.http.post<Status>('/api/devices/import', {responseType: 'json'});
  }
}
