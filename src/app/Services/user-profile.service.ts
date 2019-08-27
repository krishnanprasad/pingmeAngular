import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient) { }
  UpdateProfile(UpdateProfile): Observable<any> {
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.post("http://localhost:60317/api/User/UpdateProfile",
    UpdateProfile,
      httpOptions
      );
  }

  GetProfile(userid):Observable<any>
  {
    debugger;
    return this.http.get("http://localhost:60317/api/User/getProfileDetails",{params:{"userid":userid}})
  }
}
