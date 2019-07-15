import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bid-table',
  templateUrl: './bid-table.component.html',
  styleUrls: ['./bid-table.component.css']
})
export class BidTableComponent implements OnInit {
  @Input() bidlist: any;
  constructor() { }

  ngOnInit() {
  }

}
