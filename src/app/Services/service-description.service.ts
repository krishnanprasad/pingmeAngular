import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceDescriptionService {

  constructor(private http: HttpClient) { }
  getChitDetails(ChitId, UserId) {
    return this.http.get("http://edpicker.in/api/ChitDescription/GetChitDetails", { params: { "ChitId": ChitId, "UserId": UserId } });
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
  getInvitationList(ChitId): Observable<any> {
    return this.http.get("http://edpicker.in/api/ChitDescription/GetInvitation", { params: { "ChitId": ChitId } });
  }
  SearchUserName(SearchTerm): Observable<any> {
    return this.http.get("http://edpicker.in/api/Common/GetUserSearch", { params: { "SearchTerm": SearchTerm } });
  }
  SendInvitation(SendInvitation): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post("http://edpicker.in/api/ChitDescription/SendInvitation",
      SendInvitation,
      httpOptions
    );
  }
  getChitTimeTable(ChitId){
    return this.http.get("http://edpicker.in/api/ChitDescription/GetTimeTable", { params: { "ChitId": ChitId } });
  }
}
