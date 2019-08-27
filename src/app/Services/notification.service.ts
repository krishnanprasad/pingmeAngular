import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) {

  }
  GetInvitationList(UserId) {
  return this.http.get("http://localhost:60317/api/User/GetUserChitInvitaion",{params:{"UserId":UserId}});
  }
  UpdateInvitation(UpdateInvitation) {
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})    }
    return this.http.post("http://localhost:60317/api/User/UpdateChitInvitaion",UpdateInvitation,httpOptions);
    }
  handleError(err) {
    return throwError('Something Problem');

  }
}

