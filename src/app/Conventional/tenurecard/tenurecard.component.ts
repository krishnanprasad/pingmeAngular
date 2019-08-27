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

  constructor(
    private routerPage: Router,
  ) { }

  ngOnInit() {
    debugger;
    console.log('IsBidDoneForCurrentTerm' + this.IsBidDoneForCurrentTerm);
    console.log('tenureDetails' + this.tenureDetails);
    console.log('IsTransactionDone' + this.IsTransactionDone);
  }
  PayEMI() {
    this.routerPage.navigate(['/Home/Payment', this.chitid, this.termgroupid]);
    //alert(this.termgroupid + "Chit ID:" + this.chitid);
  }
}
