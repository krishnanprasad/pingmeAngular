import { Component, OnInit } from '@angular/core';
import { CreateChitService } from 'src/app/Services/create-chit.service';
import { BidTable } from 'src/app/Interface/bid-table';
import { ChitTimeTable, CreateChitPost } from 'src/app/Interface/chit-time-table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-chit',
  templateUrl: './create-chit.component.html',
  styleUrls: ['./create-chit.component.css']
})
export class CreateChitComponent implements OnInit {
  selected: string;
  chitduration: number;
  chitdurationgap: number;
  startdate: Date;
  errorMessage: string;
  Iserror: boolean;
  TempDates: Object;
  today: Date = new Date();
  bidValue: Array<BidTable> = [];
  chittimetable: Array<ChitTimeTable> = [];
  //tempbidValue: any = [];
  chitemi: number;
  isFirstItem: boolean;
  totalValue: number = this.chitemi * this.chitduration;
  UserId: string;
  chitname: any;
  chitmembers: any;
  createchitJson: any;
  NewCreateChit: CreateChitPost = {
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
  IsChitCanBeCreated: boolean = false;
  IsSpinner: boolean = false;
  //ChitId: any;
  constructor(private _CreateChitService: CreateChitService,
    private RouterPage: Router) { }


  changeValueofArray(id, value) {
    debugger;
    // this.tempbidValue[id] = value;
    this.bidValue[id].BidAmount = value;
    //return id;
  }
  ngOnInit() {
    this.chitdurationgap = 15;
    // console.log('---**Get user ID from Create Chit*---');
    this.UserId = sessionStorage.getItem("userid");
    debugger;

    //this.ChitId = sessionStorage.getItem('chitid');
  }
  changeGrandValue() {

    this.totalValue = this.chitemi * this.chitduration;
  }
  EditBid() {
    debugger;
   
  }
  GenerateTempCalendar() {
    this.IsSpinner = true;
    debugger;
    this._CreateChitService.GetTempDates(this.chitduration, this.chitdurationgap, this.startdate.toDateString()).subscribe(data => {
      if (data != "No User") {
      
        this.TempDates = data;
        this.isFirstItem = true;
        for (let i = 0; i < this.chitduration; i++) {
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

            this.bidValue.push({ DurationID: this.TempDates[i].DurationID, BidAmount: this.totalValue });
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
      //  console.log('Password' + this.errorMessage);
      }

    }, (err) => {
      this.errorMessage = "There are some issue";
    });
  }
  CreateChit() {
    debugger;
  //  console.log('UserId' + this.NewCreateChit);
    if (this.UserId != undefined) {
      this.NewCreateChit.UserId = this.UserId;
    }
    else {
      this.NewCreateChit.UserId = 'U1-979-Kri';
    }

    debugger;

    this.NewCreateChit.ChitName = this.chitname;
    this.NewCreateChit.ChitDuration = this.chitduration;
    this.NewCreateChit.ChitEMIAmount = this.chitemi;
    this.NewCreateChit.TotalMembers = this.chitmembers;
    this.NewCreateChit.StartDate = this.startdate;
    this.NewCreateChit.UserFinalChitDateTime = this.chittimetable;
    this.NewCreateChit.UserBidDateTime = this.bidValue;
    this.NewCreateChit.DurationGap = this.chitdurationgap;
    debugger;
    this.createchitJson = JSON.stringify(this.NewCreateChit)
    this._CreateChitService.CreateChit(this.createchitJson).subscribe(data => {
      if (data == "Success") {
        console.log(data);
        alert("Succesfully Chit Created");
        this.RouterPage.navigate(['/Home/Dashboard'])
        this.TempDates = data;
        this.isFirstItem = true;

        debugger;
      }
      else {

        this.Iserror = true;
        this.errorMessage = "Welcome New User";
     
      }

    }, (err) => {
      this.errorMessage = "There are some issue";
    });
  }
}
