import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  usages = [
    { servicename: 'Netflix', amount: "1340", logo: 'netflix.jpg', paiddate: '10-Jun-19', paidstatus: 'Success', paidtype: 'Card' },
    { servicename: 'Amazon Prime', amount: "1342", logo: 'amazonprime.jpg', paiddate: '10-Jun-19', paidstatus: 'Success', paidtype: 'Card' },
    { servicename: 'ICICI Insurance', amount: "950", method: 'Monthly', logo: 'iciciinsurance.jpg', paiddate: '10-Jun-19', paidstatus: 'Success', paidtype: 'Card' },
    { servicename: 'Shopper Stop', amount: "280", method: 'Monthly', logo: 'shoppersstop.jpg', paiddate: '10-Jun-19', paidstatus: 'Success', paidtype: 'Card' },
    { servicename: 'RMKV', amount: "310", method: 'Monthly', logo: 'rmkv.jpg', paiddate: '10-Jun-19', paidstatus: 'Success', paidtype: 'Card' },
    { servicename: 'Bajaj', amount: "100", method: 'Monthly', logo: 'bajaj.jpg', paiddate: '10-Jun-19', paidstatus: 'Success', paidtype: 'Card' },
    { servicename: 'Croma', amount: "92", method: 'Monthly', logo: 'croma.png', paiddate: '10-Jun-19', paidstatus: 'Success', paidtype: 'Card' },
]

  constructor() { }

  ngOnInit() {
  }

}
