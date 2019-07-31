import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceDescriptionService {

  constructor(private http: HttpClient) { }
  getChitDetails(ChitId) {
    return this.http.get("http://edpicker.in/api/ChitDescription/GetChitDetails", { params: { "ChitId": ChitId } });
  }
  getTenureDetails(userid, ChitId, termgroupid): Observable<any> {
  
    return this.http.get("http://edpicker.in/api/ChitDescription/GetTenureDetails", { params: { "userid": userid, "ChitId": ChitId, "termgroupid": termgroupid } });
  }

  getUserTransaction(UserId): Observable<any> {
    return this.http.get("http://edpicker.in/api/User/GetUserTransaction", { params: { "Userid": UserId } });
  }

  getUserList(ChitId): Observable<any> {
    return this.http.get("http://edpicker.in/api/ChitDescription/GetChitUserList", { params: { "ChitId": ChitId } });
  }
}
