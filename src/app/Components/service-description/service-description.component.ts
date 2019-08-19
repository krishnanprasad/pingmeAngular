import { Component, OnInit } from '@angular/core';
import * as exampleData from '../../Services/ChitTenure.json';
import { ServiceDescriptionService } from 'src/app/Services/service-description.service.js';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/Services/modal.service';
@Component({
  selector: 'app-service-description',
  templateUrl: './service-description.component.html',
  styleUrls: ['./service-description.component.css', '../../Common/Modal/modal.component.less']
})
export class ServiceDescriptionComponent implements OnInit {
  chitDetails: any;
  public chitTerm: any;
  chitUserList: any;
  chitid: string;
  Iserror: boolean;
  errorMessage: string;
  termgroupid: string;
  tenureBidList: any;
  tenureTransactionList: any;
  tenureDetails: any;
  CurrentChitTerm: any;
  IsTransactionDone: any;
  userid: string;
  Currenttermgroupid: any;
  termgroupNumber: any;
  userList: any;
  Hello: { "Name": string; }[];
  IsOrganiser: any;
  constructor(
    private _ServiceDescription: ServiceDescriptionService,
    private route: ActivatedRoute,
    private routerPage: Router,
    private modalService: ModalService,
  ) {
    route.params.subscribe(val => {
      this.ngOnInit()
    });

  }
  ngOnInit() {
    this.chitid = this.route.snapshot.paramMap.get("chitid");
    this.userid = sessionStorage.getItem("userid");


    this._ServiceDescription.getChitDetails(this.chitid, this.userid).subscribe(chitdata => {
      if (chitdata != "No User") {
        debugger;
        this.chitDetails = chitdata["ChitDetails"];
        this.chitTerm = chitdata["ChitTermGroupList"];

        this.chitUserList = chitdata["ChitUserDetails"];
        this.IsOrganiser = chitdata["IsOrganiser"];
     

        this.termgroupid = this.chitTerm.filter(x => x.DiffDate === 'Current');
        debugger;
        if (this.termgroupid.length==0) {
          this.termgroupid = '0';
        }
        else{
          this.termgroupid = this.chitTerm.filter(x => x.DiffDate === 'Current')[0].termgroupid;
        }
       
        this.Iserror = false;


        this._ServiceDescription.getTenureDetails(this.userid, this.chitid, this.termgroupid).subscribe(chitdata => {
          if (chitdata != "No User") {
            debugger;
            this.tenureBidList = chitdata["TermGroupBidList"];
            this.tenureTransactionList = chitdata["TenureTransactionList"];
            debugger;
            this.tenureDetails = chitdata["TransactopnChitTermDetails"];

            this.IsTransactionDone = chitdata["IsTransactionDoneForCurrentTerm"];
            // if(this.IsTransactionDone.length!=00)
            console.log(this.IsTransactionDone);
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
      else {

        this.Iserror = true;
        this.errorMessage = "Welcome New User";
        console.log('Password' + this.errorMessage);
      }
    }
    )



  }

  getUserListOfChit(id) {
    debugger;
    this._ServiceDescription.getUserList(this.chitid).subscribe(ResponseData => {
      if (ResponseData != "No User") {
        debugger;
        this.userList = ResponseData;
        this.Hello = [{ "Name": "Krishnan" }]
        this.modalService.open(id);
      }
    }
    )
  }
  ChangeTenure(termgroupid) {
    debugger;
    this.termgroupid = termgroupid;
    this.userid = sessionStorage.getItem("userid");
    this._ServiceDescription.getTenureDetails(this.userid, this.chitid, this.termgroupid).subscribe(chitdata => {
      if (chitdata["TransactopnChitTermDetails"] != null) {
        debugger;
        this.tenureBidList = chitdata["TermGroupBidList"];
        this.tenureTransactionList = chitdata["TenureTransactionList"];
        this.tenureDetails = chitdata["TransactopnChitTermDetails"];
        console.log("-- IsTransactionDone -- ForCurrentTerm --ChangeTenure ");
        this.IsTransactionDone = chitdata["IsTransactionDoneForCurrentTerm"];
        console.log(this.IsTransactionDone);
        debugger;
      }
      else {
        debugger;
        this.Iserror = true;
        this.tenureBidList = [];
        this.tenureTransactionList = [];
        this.IsTransactionDone = [];
        console.log('No Data Found' + this.errorMessage);
      }
    }
    )
  }

  PayEMI() {
    this.routerPage.navigate(['/Home/Payment', this.chitid, this.termgroupid]);
    //alert(this.termgroupid + "Chit ID:" + this.chitid);
  }

  openModal(id: string) {
    this.getUserListOfChit(id);
    // this.modalService.open(id);


  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
