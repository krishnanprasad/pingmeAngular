import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }
  checkCredentials(PhoneNumber) {
  return this.http.get("http://edpicker.in/api/Login/GetOTP",{params:{"PhoneNumber":PhoneNumber}});
  }

  verifyUser(PhoneNumber,OTP) {
    return this.http.get("http://edpicker.in/api/Login/VerifyOTP",{params:{"PhoneNumber":PhoneNumber,"OTP":OTP}});
    }
  handleError(err) {
    return throwError('Something Problem');

  }
}

