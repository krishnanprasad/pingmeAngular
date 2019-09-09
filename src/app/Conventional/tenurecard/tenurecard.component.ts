import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tenure-card',
  templateUrl: './tenurecard.component.html',
  styleUrls: ['./tenurecard.component.css']
})
export class TenurecardComponent implements OnInit {
  @Input() IsBidDoneForCurrentTerm: any;
  @Input() tenureDetails: any;
  @Input() IsTransactionDone: any;
  @Input() chitid: string;
  @Input() termgroupid:string;
  @Input() IsBidDoneByUser:any;
  @Input() IsChitStarted:any;
  constructor(
    private routerPage: Router,
  ) { }

  ngOnInit() {
    debugger;
    console.log(this.IsChitStarted);
   
   
  }
  PayEMI() {
    this.routerPage.navigate(['/Home/Payment', this.chitid, this.termgroupid]);
    //alert(this.termgroupid + "Chit ID:" + this.chitid);
  }
  TakeLoan() {
    this.routerPage.navigate(['/Home/Loan', this.chitid, this.termgroupid]);
    //alert(this.termgroupid + "Chit ID:" + this.chitid);
  }
}
