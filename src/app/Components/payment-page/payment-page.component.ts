import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddTransaction } from 'src/app/Interface/add-transaction';
import { TransactionService } from 'src/app/Services/transaction.service';

@Component({
  selector: 'payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  transactionform: AddTransaction;
  
  Iserror: boolean;
  errorMessage: string;
  UserId: string;
  TermGroupId: string;
  ChitId: string;
  chitdata: any;

  constructor(private route: ActivatedRoute, private __TransactionService: TransactionService, private RouterPage: Router) { }

  ngOnInit() {

      this.UserId = sessionStorage.getItem('userid');
      this.ChitId = this.route.snapshot.paramMap.get("chitid");
      this.TermGroupId = this.route.snapshot.paramMap.get("termgroupid");


      this.__TransactionService.getEMIDetails(this.UserId, this.ChitId, this.TermGroupId).subscribe(chitdata => {
        if (chitdata != "No User") {
          debugger;
          this.chitdata = chitdata;
          this.transactionform.Amount=chitdata.EMIAmount;
        }
        else {

          this.Iserror = true;
          this.errorMessage = "Welcome New User";
       
        }
      }
      )
    this.transactionform = ({
      UserId: this.UserId,
      ChitId: this.ChitId,
      TermGroupId: this.TermGroupId,
      Amount: 0,
      ModeOfPayment: 1
    });
    //  this.transactionform.chitid = ;
    // this.transactionform.termgroupid = ;
  }
  onSubmitTransaction(transactionform: AddTransaction) {
    // this._ServiceDescription.getTenureDetails(this.userid,this.chitid,this.termgroupid).subscribe(chitdata => {
    //   if (chitdata != "No User") {
    //     debugger;

    //   }
    //   else {

    //     this.Iserror = true;
    //     this.errorMessage = "Welcome New User";
    //  
    //   }
    // } 
    // )
    debugger;
    console.log(JSON.stringify(this.transactionform));
    debugger;
    this.__TransactionService.addTransaction(JSON.stringify(this.transactionform)).subscribe(transactionresponse => {
      if (transactionresponse == "Success") {
        alert("Successfully Money Transaferred");
        this.RouterPage.navigate(['/Home/ServiceDetails/' + this.transactionform.ChitId])
        debugger;
      }
      else {

        this.Iserror = true;
        this.errorMessage = "Welcome New User";
      
      }
    }
    )
  
  }
}
