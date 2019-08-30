import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/Services/notification.service';
import { UpdateInvitation } from 'src/app/Interface/update-invitation';
import { Router } from '@angular/router';
@Component({
  selector: 'invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})

export class InvitationComponent implements OnInit {

  public CurrentTab: number;
  userid: string;
  invitationlist: any;
  updateinv:UpdateInvitation={UserId:'',ConnectionId:'',StatusId:0};
  constructor(private _notificationservice: NotificationService,
    private routerPage:Router
    ) { }

  ngOnInit() {
    this.CurrentTab = 1;
    this.userid = sessionStorage.getItem('userid');
    this._notificationservice.GetInvitationList(this.userid).subscribe(invitationlistResponse => {
      if (invitationlistResponse != "No User") {
        debugger;
        this.invitationlist = invitationlistResponse;
      }
      else {
        console.log('No DATA');
      }
    }
    )
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
        }
        else {
          console.log('No DATA');
        }
      }
      )
     }
    }
  }
  GoToChit(chitid){
    this.routerPage.navigate(['Home/ServiceDetails',chitid])
  }
}