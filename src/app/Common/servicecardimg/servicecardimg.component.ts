import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'servicecardimg',
  templateUrl: './servicecardimg.component.html',
  styleUrls: ['./servicecardimg.component.css']
})
export class ServicecardimgComponent implements OnInit {
  @Input() OwnerDetails:any;
  constructor() { }

  ngOnInit() {
  }

}
