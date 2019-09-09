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
  return this.http.get("http://edpicker.in/api/User/GetUserChitInvitaion",{params:{"UserId":UserId}});
  }
  UpdateInvitation(UpdateInvitation) {
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})    }
    return this.http.post("http://edpicker.in/api/User/UpdateChitInvitaion",UpdateInvitation,httpOptions);
    }
  handleError(err) {
    return throwError('Something Problem');

  }
  GetUserNotification(UserId){
    return this.http.get("http://edpicker.in/api/User/getUserNotification",{params:{"UserId":UserId}});
  }
  updateSeenStatus(UserId){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})    }
    return this.http.post("http://edpicker.in/api/User/checkedNotification",{params:{"UserId":UserId}},httpOptions);
  }
}

