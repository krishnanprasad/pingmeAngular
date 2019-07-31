import { Component, OnInit } from '@angular/core';
import { ServiceDescriptionService } from 'src/app/Services/service-description.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  
chitid: string;
  Iserror: boolean;
  errorMessage: string;
  transactionList: any;
  userid:any;
  username: string;
  constructor(private _ServiceDescription: ServiceDescriptionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userid=sessionStorage.getItem('userid');
    this.username=sessionStorage.getItem('username');
    debugger;
    this._ServiceDescription.getUserTransaction(this.userid).subscribe(userTransaction => {
      if (userTransaction != "No User") {
      debugger;
        this.transactionList = userTransaction;
        this.Iserror = false;
      }
      else {

        this.Iserror = true;
        this.errorMessage = "Welcome New User";
        console.log('Password' + this.errorMessage);
      }
    }
    )
    
  
  }

}
