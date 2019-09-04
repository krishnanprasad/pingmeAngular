import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  NotificationCount:any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.NotificationCount=sessionStorage.getItem('notificationcount');
    debugger;
  }

  Logout(){
    sessionStorage.clear();
    this.router.navigate(['/Login']);
  }

}
