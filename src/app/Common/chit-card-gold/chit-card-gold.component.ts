import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chit-card-gold',
  templateUrl: './chit-card-gold.component.html',
  styleUrls: ['./chit-card-gold.component.css']
})
export class ChitCardGoldComponent implements OnInit {
  @Input() ServiceData: any;
  constructor() { }

  ngOnInit() {
  }

}
