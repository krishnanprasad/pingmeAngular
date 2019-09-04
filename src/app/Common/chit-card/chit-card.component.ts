import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chit-card',
  templateUrl: './chit-card.component.html',
  styleUrls: ['./chit-card.component.css']
})
export class ChitCardComponent implements OnInit {
  @Input() ServiceData: any;
  public randomNumber: number;
  constructor() { }

  ngOnInit() {
 
  }
  public onNumberGenerated(randomNumber: number) {   
    this.randomNumber = randomNumber;  
  }
}
