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
    return this.http.post("http://localhost:60317/api/Transaction/AddTransaction",
      AddTransaction,
      httpOptions
      );
  }
  getEMIDetails(userid,chitid,termgroupid):Observable<any>
  {
    return this.http.get("http://localhost:60317/api/Payment/GetEMIPaymentInfo",{params:{"userid":userid,"chitid":chitid,"termgroupid":termgroupid}})
  }
}
