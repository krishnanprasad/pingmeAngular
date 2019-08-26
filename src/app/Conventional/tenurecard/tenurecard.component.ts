import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tenure-card',
  templateUrl: './tenurecard.component.html',
  styleUrls: ['./tenurecard.component.css']
})
export class TenurecardComponent implements OnInit {
@Input() TenureDetails:any;
@Input() IsChitStarted:boolean;
IsTransactionDone:any;
  constructor() { }

  ngOnInit() {
  }

}
