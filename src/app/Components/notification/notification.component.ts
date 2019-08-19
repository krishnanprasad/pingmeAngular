import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/Services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  public CurrentTab: number;
  constructor(private _NotificationService:NotificationService) { }

  ngOnInit() {
    this.CurrentTab = 1;
  }

  ChangeTab(Newtab) {
    this.CurrentTab = Newtab;
  }

}
