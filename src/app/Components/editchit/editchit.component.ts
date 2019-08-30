import { Component, OnInit } from '@angular/core';
import { ServiceDescriptionService } from 'src/app/Services/service-description.service';
import { CreateChitPost, ChitTimeTable } from 'src/app/Interface/chit-time-table';
import { ActivatedRoute } from '@angular/router';
import { CreateChitService } from 'src/app/Services/create-chit.service';
import { BidTable } from 'src/app/Interface/bid-table';

@Component({
  selector: 'app-editchit',
  templateUrl: './editchit.component.html',
  styleUrls: ['./editchit.component.css']
})
export class EditchitComponent implements OnInit {
  public UserId: string;
  public ChitId: string;
  ChitDetails: any;
  EditCreatedChit: CreateChitPost = {
    UserId: '',
    ChitName: '',
    ChitDuration: 0,
    ChitEMIAmount: 0,
    TotalMembers: 0,
    StartDate: null,
    UserFinalChitDateTime: null,
    UserBidDateTime: null,
    DurationGap: 1,
  };
  diffdatetime: number;
  EditCreateChit: any;
  EditCreateChitOrginal: any;
  IsSpinner: boolean;
  TempDates: Object;
  isFirstItem: boolean;
  IsChitCanBeCreated: boolean;
  bidValue: Array<BidTable> = [];
  chittimetable: Array<ChitTimeTable> = [];
  Iserror: boolean;
  errorMessage: string;
  EditCreatedChitJson: string;
  constructor(private _ServiceDescription: ServiceDescriptionService,
    private _CreateChitService: CreateChitService,
    private getroute: ActivatedRoute) { }

  ngOnInit() {
    this.ChitId = this.getroute.snapshot.paramMap.get("chitid");
    this.UserId = sessionStorage.getItem('Userid');
    this._ServiceDescription.getGetEditChitDetails(this.ChitId, this.UserId).subscribe(data => {
      if (data != "No User") {
        debugger
        this.EditCreateChit = data["ChitDetails"];
        //let copy = Object.assign({}, myObject)
        this.EditCreateChitOrginal = Object.assign({}, this.EditCreateChit)
        // this.EditCreateChit.ChitName=this.ChitDetails.chitname;
        debugger;
        this.getChitCalendar();
      }
      else {
        debugger
      }

    }, (err) => {
      debugger;
    });
  }

  GenerateTempCalendar() {
    this.TempDates = null;
    this.IsSpinner = true;
     this.bidValue = [];
     this.chittimetable = [];
    if (typeof (this.EditCreateChit.startdate) == "string") {
      this.EditCreateChit.startdate = this.EditCreateChit.startdate;
    }
    else {
      this.EditCreateChit.startdate = this.EditCreateChit.startdate.toDateString();
    }
    debugger;
    this._CreateChitService.GetTempDates(this.EditCreateChit.tenure, this.EditCreateChit.DurationGap, this.EditCreateChit.startdate).subscribe(data => {
      if (data != "No User") {

        this.EditCreateChit.startdate = new Date(this.EditCreateChit.startdate);
        console.log(data);
        this.TempDates = data;
        this.isFirstItem = true;
        debugger;

        for (let i = 0; i < this.EditCreateChit.tenure; i++) {
          if (this.isFirstItem == true) {
            this.IsChitCanBeCreated = true;
            debugger;
            this.bidValue.push({ DurationID: this.TempDates[i].DurationID, BidAmount: 0 });
            this.chittimetable.push({ DurationID: this.TempDates[i].DurationID, StartDate: this.TempDates[i].StartDate, EndDate: this.TempDates[i].EndDate });
            //this.tempbidValue[i] = 0;
            this.isFirstItem = false;
            this.IsSpinner = false;
          }
          else {

            debugger;

            this.bidValue.push({ DurationID: this.TempDates[i].DurationID, BidAmount: this.EditCreateChit.amount });
            this.chittimetable.push({ DurationID: this.TempDates[i].DurationID, StartDate: this.TempDates[i].StartDate, EndDate: this.TempDates[i].EndDate });
            // this.tempbidValue[i] = this.totalValue;
            this.IsSpinner = false;
          }
        }
        debugger;
      }
      else {

        this.Iserror = true;
        this.errorMessage = "Welcome New User";
        console.log('Password' + this.errorMessage);
      }

    }, (err) => {
      this.errorMessage = "There are some issue";
    });
  }
  ConfirmEditChit() {
    debugger;
    console.log('UserId' + this.EditCreatedChit);
    if (this.UserId != undefined) {
      this.EditCreatedChit.UserId = this.UserId;
    }
    else {
      this.EditCreatedChit.UserId = 'U1-979-Kri';
    }

    debugger;

    this.EditCreatedChit.ChitName = this.EditCreateChit.chitname;
    this.EditCreatedChit.ChitDuration = this.EditCreateChit.chitduration;
    this.EditCreatedChit.ChitEMIAmount = this.EditCreateChit.chitemi;
    this.EditCreatedChit.TotalMembers = this.EditCreateChit.membercount;
    this.EditCreatedChit.StartDate = this.EditCreateChit.startdate;
    this.EditCreatedChit.UserFinalChitDateTime = this.chittimetable;
    this.EditCreatedChit.UserBidDateTime = this.bidValue;
    this.EditCreatedChit.DurationGap = this.EditCreateChit.DurationGap;
    debugger;
    this.EditCreatedChitJson = JSON.stringify(this.EditCreatedChit)
    this._CreateChitService.CreateChit(this.EditCreatedChitJson).subscribe(data => {
      if (data == "Success") {
        console.log(data);
        alert("Succesfully Chit Created");
        // this.RouterPage.navigate(['/Home/Dashboard'])
        this.TempDates = data;
        this.isFirstItem = true;

        debugger;
      }
      else {

        this.Iserror = true;
        this.errorMessage = "Welcome New User";
        console.log('Password' + this.errorMessage);
      }

    }, (err) => {
      this.errorMessage = "There are some issue";
    });
  }

  getChitCalendar() {
    this.TempDates = null;
    this.IsSpinner = true;

    debugger;
    if (typeof (this.EditCreateChit.startdate) == "string") {
      this.EditCreateChit.startdate = this.EditCreateChit.startdate;
    }
    else {
      this.EditCreateChit.startdate = this.EditCreateChit.startdate.toDateString();
    }
    debugger;
    this._ServiceDescription.getEditChitDateTime(this.ChitId).subscribe(data => {
      if (data != "No User") {

        this.EditCreateChit.startdate = new Date(this.EditCreateChit.startdate);
        console.log(data);
        this.TempDates = data;
        this.isFirstItem = true;
        debugger;

        for (let i = 0; i < this.EditCreateChit.tenure; i++) {

          this.bidValue.push({ DurationID: this.TempDates[i].DurationID, BidAmount: this.TempDates[i].BidCAPAmount });
          this.chittimetable.push({ DurationID: this.TempDates[i].DurationID, StartDate: this.TempDates[i].StartDate, EndDate: this.TempDates[i].EndDate });
          //this.tempbidValue[i] = 0;

          this.IsSpinner = false;

        }
        debugger;
      }
      else {

        this.Iserror = true;
        this.errorMessage = "Welcome New User";
        console.log('Password' + this.errorMessage);
      }

    }, (err) => {
      this.errorMessage = "There are some issue";
    });
  }
  ChangedValuesInDuration(gap) {
    this.EditCreateChit.DurationGap = gap;
  
    this.GenerateTempCalendar();
  }
  ChangedValuesInStartDate(startdate) {
  
    this.EditCreateChit.startdate = startdate;
   
    this.GenerateTempCalendar();
  }
  ChangedValuesInTenure(tenure) {
 
    if (tenure != null && tenure!=1 && tenure!=0) {
      this.EditCreateChit.tenure = tenure;
    
      this.GenerateTempCalendar();
    }
  }
}
