import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) {

  }
  addTransaction(AddTransaction): Observable<any> {
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.post("http://edpicker.in/api/Transaction/AddTransaction",
      AddTransaction,
      httpOptions
      );
  }
  getEMIDetails(userid,chitid,termgroupid):Observable<any>
  {
    return this.http.get("http://edpicker.in/api/Payment/GetEMIPaymentInfo",{params:{"userid":userid,"chitid":chitid,"termgroupid":termgroupid}})
  }
}
