import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceDescriptionService {

  constructor(private http: HttpClient) { }
  getChitDetails(ChitId) {
    return this.http.get("http://edpicker.in/api/ChitDescription/GetChitDetails",{params:{"ChitId":ChitId}});
    }
    getTenureDetails(ChitId,termgroupid) {
      return this.http.get("http://edpicker.in/api/ChitDescription/GetTenureDetails",{params:{"ChitId":ChitId,"termgroupid":termgroupid}});
      }
}
