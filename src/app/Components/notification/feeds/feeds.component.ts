import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/Services/notification.service';

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
  UserId: string;
  NotificationMessage: any;
  constructor(private _NotificationService:NotificationService) { }

  ngOnInit() {
    debugger;
    this.UserId=sessionStorage.getItem('userid');
    this._NotificationService.GetUserNotification(this.UserId).subscribe(data => {
      if (data != "No User") {
        debugger;
        this.NotificationMessage=data;    
        this.UpdateNotificationSeenStatus();
      }

    }
    )
  }

  UpdateNotificationSeenStatus(){
    debugger
    this._NotificationService.updateSeenStatus(this.UserId).subscribe(data => {
      if (data != "Success") {
        debugger;
        this.NotificationMessage="Success";    
        
      }

    }
    )
  }

}
