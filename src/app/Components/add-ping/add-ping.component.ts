import { Component, OnInit } from '@angular/core';
import { AddPing } from 'src/app/Class/add-ping';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-add-ping',
  templateUrl: './add-ping.component.html',
  styleUrls: ['./add-ping.component.css']
})
export class AddPingComponent implements OnInit {

  constructor() { }


  addping = new AddPing('Loan', 'Apple Watch', '', '', '', '6M', '');
  ngOnInit() {
  }

}
