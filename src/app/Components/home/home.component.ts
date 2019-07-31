import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  IsUserLoggedIn:any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.IsUserLoggedIn=sessionStorage.getItem('userid');
    if(this.IsUserLoggedIn!=null)
    {

    }
    else{
      this.router.navigate(['/Login']);
    }
  }

}
