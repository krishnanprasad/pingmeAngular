import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  feedlist = [
    { Icon: '', Message: 'Hello How are you, Hope you are doing great', DateTime: '06:30 10-Jun' },
    { Icon: '', Message: 'Hi', DateTime: '06:31 10-Jun' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
