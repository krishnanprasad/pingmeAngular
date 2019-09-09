import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getChitDetails(userid) {
    return this.http.get("http://edpicker.in/api/User/GetChits",{params:{"Userid":userid}});
    }
    getDashboardDetails(userid) {
      return this.http.get("http://edpicker.in/api/User/getDashboardDetails",{params:{"Userid":userid}});
      }
}
