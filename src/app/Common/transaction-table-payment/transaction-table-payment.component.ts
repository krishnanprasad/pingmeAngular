import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'transaction-table-payment',
  templateUrl: './transaction-table-payment.component.html',
  styleUrls: ['./transaction-table-payment.component.css']
})
export class TransactionTablePaymentComponent implements OnInit {
  @Input() transactiondetails: any;
  constructor() { }

  ngOnInit() {
  }

}
