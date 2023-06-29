import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AirlineService {
  // private url: string = environment.baseurl;
  constructor(private http: HttpClient) {}

  getAirlineDetails() {
    return this.http.get(`https://api.instantwebtools.net/v1/airlines`);
  }
}
