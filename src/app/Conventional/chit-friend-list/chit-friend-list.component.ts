import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/Services/modal.service';
import { ServiceDescriptionService } from 'src/app/Services/service-description.service';
import { SendInvitation } from 'src/app/Interface/send-invitation';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'chit-friend-list',
  templateUrl: './chit-friend-list.component.html',
  styleUrls: ['./chit-friend-list.component.css']
})
export class ChitFriendListComponent implements OnInit {
  TestDate:any;
  @Input() id: string;
  private element: any;
  @Input() UserList: any;
  @Input() IsOrganiser:any;
  @Input() IsChitStarted:boolean;
  CurrentTab: number = 1;
  SearchTerm: string = "";
  SearchNameResult: any;
  NoResultsFound: boolean;
  CreateInvitation: SendInvitation = {
    UserId: '', ChitId: ''
  };
  SendInvitationJson: string;
  ChitId: string;
  InvitationUserList: any;
  constructor(private modalService: ModalService,
    private el: ElementRef,
    private _ServiceDescription: ServiceDescriptionService,
    private route: ActivatedRoute,
    private navigaterouter:Router
    ) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
   debugger;
   this.TestDate=this.IsChitStarted;
    this.ChitId = this.route.snapshot.paramMap.get("chitid");
    this._ServiceDescription.getInvitationList(this.ChitId).subscribe(ResponseData => {
      if (ResponseData != "No User") {
        debugger;
        this.InvitationUserList = ResponseData;     

      }
      else {
        this.NoResultsFound = true;
        this.SearchNameResult = [];
      }
    }
    )
  }
  ChangeTab(val) {
   
    this.CurrentTab = val;
  }

  onSearchChange(searchValue: string): void {

    if (searchValue.length > 2) {
    
      this._ServiceDescription.SearchChitInviteUserName(searchValue,this.ChitId).subscribe(ResponseData => {
        if (ResponseData != "No User") {
          this.NoResultsFound = false;
          debugger;
          this.SearchNameResult = ResponseData;
         
        }
        else {
          this.NoResultsFound = true;
          this.SearchNameResult = [];
        }
      }
      )
    }
    else {
      this.SearchNameResult = [];
      this.NoResultsFound = true;
    }
  }
  SendInvitation(UserId) {
    this.CreateInvitation.ChitId = this.route.snapshot.paramMap.get("chitid");
    this.CreateInvitation.UserId = UserId;
   debugger;
    this.SendInvitationJson = JSON.stringify(this.CreateInvitation)
    this._ServiceDescription.SendInvitation(this.SendInvitationJson).subscribe(ResponseData => {
      if (ResponseData != "No User") {
        this.NoResultsFound = false;
        debugger;
        this.SearchNameResult = ResponseData;
        this.navigaterouter.navigate(['Home/Dashboard'])
      }
      else {
        this.NoResultsFound = true;
        this.SearchNameResult = [];
      }
    }
    )
  }

}



