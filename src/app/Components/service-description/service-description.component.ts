import { Component, OnInit } from '@angular/core';
import * as exampleData from '../../Services/ChitTenure.json';
import { ServiceDescriptionService } from 'src/app/Services/service-description.service.js';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-service-description',
  templateUrl: './service-description.component.html',
  styleUrls: ['./service-description.component.css']
})
export class ServiceDescriptionComponent implements OnInit {
  chitDetails: any;
  chitTerm: any;
  chitUserList:any;
  chitid: string;
  Iserror: boolean;
  errorMessage: string;
  termgroupid:string="C1--Tes--014/1";
  tenureBidList:any;
  tenureTransactionList:any;
  tenureDetails:any;
  constructor(private _ServiceDescription: ServiceDescriptionService, private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.chitid = this.route.snapshot.paramMap.get("chitid");
    this._ServiceDescription.getChitDetails(this.chitid).subscribe(chitdata => {
      if (chitdata != "No User") {
        debugger;
        this.chitDetails = chitdata["ChitDetails"];
        this.chitTerm = chitdata["ChitTermGroupList"];
        this.chitUserList =  chitdata["ChitUserDetails"];

        this.Iserror = false;
      }
      else {

        this.Iserror = true;
        this.errorMessage = "Welcome New User";
        console.log('Password' + this.errorMessage);
      }
    }
    )


    this._ServiceDescription.getTenureDetails(this.chitid,this.termgroupid).subscribe(chitdata => {
      if (chitdata != "No User") {
        debugger;
        this.tenureBidList = chitdata["TransactionChitBidList"];
        this.tenureTransactionList = chitdata["TenureTransactionList"];
        this.tenureDetails =  chitdata["TransactopnChitTermDetails"];

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
