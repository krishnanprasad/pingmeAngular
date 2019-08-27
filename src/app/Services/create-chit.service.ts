import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CreateChitService {

  constructor(private http: HttpClient) { }
  GetTempDates(TotalDuration, DurationGap, StartDate) {
    return this.http.get("http://localhost:60317/api/ChitDescription/GetTempDateTime", { params: { "TotalDuration": TotalDuration, "DurationGap": DurationGap, "StartDate": StartDate } });
  }
  CreateChit(_NewCreateChitJson): Observable<any> {
    debugger;
    // let parameters = new HttpParams();
    // parameters = parameters.set('UserId', _NewCreateChit.UserId);
    // parameters = parameters.set('ChitName', _NewCreateChit.ChitName);
    // parameters = parameters.set('ChitDuration', _NewCreateChit.ChitDuration);
    // parameters = parameters.set('ChitEMIAmount', _NewCreateChit.ChitEMIAmount);
    // parameters = parameters.set('TotalMembers', _NewCreateChit.TotalMembers);
    // parameters = parameters.set('StartDate', _NewCreateChit.StartDate);
    // parameters = parameters.set('UserFinalChitDateTime', _NewCreateChit.UserFinalChitDateTime);
    // parameters = parameters.set('UserBidDateTime', _NewCreateChit.UserBidDateTime);
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    return this.http.post("http://localhost:60317/api/CreateChit/CreateNewChit",
      _NewCreateChitJson,
      httpOptions
    );
  }
}
