import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient) {

  }
  getBidDetail(UserId,ChitId,TermgroupId) {
  return this.http.get("http://localhost:60317/api/Loan/GetBidDetail",{params:{"UserId":UserId,"ChitId":ChitId,"TermgroupId":TermgroupId}});
  }
  
}
