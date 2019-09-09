import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from 'src/app/Services/loan.service';

@Component({
  selector: 'app-create-loan',
  templateUrl: './create-loan.component.html',
  styleUrls: ['./create-loan.component.css']
})
export class CreateLoanComponent implements OnInit {
  UserId: string;
  ChitId: any;
  TermGroupId: any;
  loanform: { UserId: string; ChitId: any; TermGroupId: any; BidAmount: number; };
  IsSpinner: boolean;
  loanDetails: Object;
  CheckLoanForm: { UserId: string; ChitId: any; TermGroupId: any; BidAmount: number; };

  constructor(private route: ActivatedRoute,private __LoanService: LoanService, private RouterPage: Router) { }

  ngOnInit() {
    this.IsSpinner=true;
    this.UserId = sessionStorage.getItem('userid');
      this.ChitId = this.route.snapshot.paramMap.get("chitid");
      this.TermGroupId = this.route.snapshot.paramMap.get("termgroupid");
    debugger
      this.__LoanService.getBidDetail(this.UserId, this.ChitId, this.TermGroupId).subscribe(chitdata => {
        if (chitdata != "No User") {
          debugger;
          this.loanDetails=chitdata;
          this.loanform.BidAmount = chitdata["Amount"];
          this.IsSpinner=false;
        }
        else {

       
        }
      }
      )
      this.loanform = ({
        UserId: this.UserId,
        ChitId: this.ChitId,
        TermGroupId: this.TermGroupId,
        BidAmount: 0
      });
  }
  onSubmitTransaction() {
    debugger;
    this.CheckLoanForm=this.loanform;
  }
}
