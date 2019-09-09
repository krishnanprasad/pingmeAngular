import { Component, OnInit } from '@angular/core';
import { ServiceDescriptionService } from 'src/app/Services/service-description.service.js';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/Services/modal.service';
import { UpdateInvitation } from 'src/app/Interface/update-invitation.js';
import { NotificationService } from 'src/app/Services/notification.service.js';
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
  IsOrganiser: boolean = false;
  CurrentTab: number = 1;
  IsChitStarted: Boolean = false;
  tenureTimeTable: any;
  chitTimeTable: any;
  connectionStatus: any;
  CurrentDate = new Date();
  IsBidDoneForCurrentTerm: any;
  TotalAcceptedInvite: any;
  updateinv:UpdateInvitation={UserId:'',ConnectionId:'',StatusId:0};
  IsBidDoneByUser: any;
  startdate: any;
 
  constructor(
    private _ServiceDescription: ServiceDescriptionService,
    private route: ActivatedRoute,
    private routerPage: Router,
    private modalService: ModalService,
    private _notificationservice: NotificationService
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

        this.chitDetails = chitdata["ChitDetails"];
        this.chitTerm = chitdata["ChitTermGroupList"];

        this.chitUserList = chitdata["ChitUserDetails"];
        this.connectionStatus = chitdata["ConnectionDetails"];
        this.TotalAcceptedInvite = chitdata["TotalAcceptedInvites"];

        if (this.connectionStatus.organiser == 1) {
          this.IsOrganiser = true;
        }
      
        //To Get Current Chit Term Group
        debugger;
        //If Chit is Not Started
        if (this.chitDetails.status == 1 || this.chitDetails.status == 2) {
          debugger;
          this.termgroupid = this.chitTerm[0].termgroupid;
          this.startdate = this.chitTerm[0].startdate;
          this.IsChitStarted = false;
        }
        else {
          this.IsChitStarted = true;
          this.termgroupid = this.chitTerm.filter(x => x.DiffDate === 'Current')[0].termgroupid;
        }

        this.Iserror = false;


        this._ServiceDescription.getTenureDetails(this.userid, this.chitid, this.termgroupid).subscribe(chitdata => {
          if (chitdata != "No User") {

            this.tenureBidList = chitdata["TermGroupBidList"];
            this.tenureTransactionList = chitdata["TenureTransactionList"];

            this.tenureDetails = chitdata["TransactionChitTermDetails"];
            this.IsBidDoneForCurrentTerm = chitdata["IsBidDoneForCurrentTerms"];
            debugger;
            this.IsTransactionDone = chitdata["IsTransactionDoneForCurrentTerm"];
            this.IsBidDoneByUser = chitdata["IsBidDoneByUser"];
            // if(this.IsTransactionDone.length!=00)
            console.log('*******----this.tenureDetails-----********');
            
            console.log(this.tenureDetails);
            this.Iserror = false;
          }
          else {

            this.Iserror = true;
            this.errorMessage = "Welcome New User";
         
          }
        }
        )
      }
      else {

        this.Iserror = true;
        this.errorMessage = "Welcome New User";
     
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
  NavigateToDashboard() {
    this.routerPage.navigate(['/Home/Dashboard']);
  }
  ChangeTenure(termgroupid) {
    debugger;
    this.termgroupid = termgroupid;
    this.userid = sessionStorage.getItem("userid");
    this._ServiceDescription.getTenureDetails(this.userid, this.chitid, this.termgroupid).subscribe(chitdata => {
      if (chitdata["TransactionChitTermDetails"] != null) {
        debugger;
        this.tenureBidList = chitdata["TermGroupBidList"];
        this.tenureTransactionList = chitdata["TenureTransactionList"];
        this.tenureDetails = chitdata["TransactionChitTermDetails"];
        this.IsBidDoneForCurrentTerm = chitdata["IsBidDoneForCurrentTerms"];
        this.IsTransactionDone = chitdata["IsTransactionDoneForCurrentTerm"];
        this.IsBidDoneByUser = chitdata["IsBidDoneByUser"];
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
  
  
  
  
    console.log('IsBidDoneForCurrentTerm -- SD' + this.IsBidDoneForCurrentTerm);
    console.log(this.IsBidDoneForCurrentTerm);
    console.log('tenureDetails -- SD' + this.tenureDetails);
    console.log(this.tenureDetails);
    console.log('IsTransactionDone -- SD');
    console.log(this.IsTransactionDone);
  
  
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

  SwitchTab(Tab) {
    this.CurrentTab = Tab;

  }
  getChitTimeTable() {

  }

  UpdateInvitation(connectionid,statusId){
    debugger;
   if(statusId==1)
   {
    if(window.confirm('Are sure you want to Join this Chit ?')){
      //put your delete method logic here
      this.updateinv.StatusId=statusId;
      this.updateinv.ConnectionId=connectionid;
      this.updateinv.UserId=this.userid;
      debugger;
      this._notificationservice.UpdateInvitation(this.updateinv).subscribe(invitationlistResponse => {
        if (invitationlistResponse != "No User") {
          debugger;
          alert('Successfully Joined Chit');
          this.routerPage.navigate(['Home/Dashboard']);
        }
        else {
          console.log('No DATA');
        }
      }
      )
     }
    }
    if(statusId==3)
   {
    if(window.confirm('Are sure you want to Reject the Chit?')){
      //put your delete method logic here
      this.updateinv.StatusId=statusId;
      this.updateinv.ConnectionId=connectionid;
      this.updateinv.UserId=this.userid;
      debugger;
      this._notificationservice.UpdateInvitation(this.updateinv).subscribe(invitationlistResponse => {
        if (invitationlistResponse != "No User") {
          debugger;
          alert('Rejected the Chit');
          this.routerPage.navigate(['Home/Dashboard'])
        }
        else {
          console.log('No DATA');
        }
      }
      )
     }
    }
  }
}
