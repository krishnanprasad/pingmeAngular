import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { DashboardService } from 'src/app/Services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private Userid:string;
  Iserror: boolean = false;
  errorMessage: string = "Wrong Credentials..";

  ChitDetailsList:any;
  constructor(private _dashboard: DashboardService,) { }

  ngOnInit() {
    this.Userid=localStorage.getItem("userid");

    this._dashboard.getChitDetails(this.Userid).subscribe(chitdata => {
      if (chitdata != "No User") {
        console.log(chitdata);
        this.ChitDetailsList=chitdata;
        //localStorage.setItem('userid', data[0].userid);
        //this.userData = data;       
        this.Iserror = false;
      }
      else {

        this.Iserror = true;
        this.errorMessage = "Welcome New User";
        console.log('Password' + this.errorMessage);
      }
    }
    )
  }
  UserService = {
    Subscription:
      [
        { servicename: 'Netflix', type: "Subscription", brandcolor: '#e52e2d', logo: 'netflix.jpg', daysleft: 7, enddate: '14 - Jun - 19', cost: 1520, offer: '2% Cashback' },
        { servicename: 'Amazon Prime', type: "Subscription", brandcolor: '#56ace9', logo: 'amazonprime.jpg', daysleft: 12, enddate: '20 - Jun - 19', cost: 1920, offer: '10% Cashback' },
        { servicename: 'ICICI Insurance', type: "Subscription", brandcolor: '#972929', logo: 'iciciinsurance.jpg', daysleft: 13, enddate: '21 - Jun - 19', cost: 2100, offer: '10% Cashback' },
        { servicename: 'Tata Sky DTH', type: "Subscription", brandcolor: '#00b9bf', logo: 'tatasky.jpg', daysleft: 28, enddate: '21 - Jun - 19', cost: 1640, offer: '5% Cashback' },
        { servicename: 'Tata Sky Broadband', type: "Subscription", brandcolor: '#00b9bf', logo: 'tataskybroadband.jpg', daysleft: 28, enddate: '21 - Jun - 19', cost: 1640, offer: '5% Cashback' },
      ],
    GiftCard: [
      { servicename: 'RMKV', type: "GiftCard", brandcolor: '#d49a00', logo: 'rmkv.jpg', daysleft: 29, enddate: '20 - Jun - 19', cost: 1920, offer: '2% Cashback' },
      { servicename: 'Croma', type: "GiftCard", brandcolor: '#00b9bf', logo: 'croma.png', daysleft: 135, enddate: '21 - Jun - 19', cost: 5000, offer: '10% Cashback' },
      { servicename: 'Shopper Stop', type: "GiftCard", brandcolor: '#000000', logo: 'shoppersstop.jpg', daysleft: 7, enddate: '14 - Jun - 19', cost: 1520, offer: '10% Cashback' },
    ],
    WG: [
      { servicename: 'Bajaj', type: "WG", brandcolor: '#1b3399', logo: 'bajaj.jpg', daysleft: 45, enddate: '21 - Jun - 19', cost: 2100, offer: '1000Rs Cashback' },
    ],
    Self: [
      { servicename: '26/8 House Rent', type: "Self", brandcolor: '#00b9bf', logo: 'houserent.png', daysleft: 19, enddate: '05 - Jul - 19', cost: 1640, offer: '5% Cashback', Owner: { OwnerName: 'Raghuraman', OwnerId: '@raghuram01', OwnerImage: 'user1.jpg' } },
    ],
    Maintenance: [
      { servicename: 'House Maintenance', type: "Maintenance", brandcolor: '#00b9bf', logo: 'girias.jpeg', daysleft: 19, enddate: '05 - Jul - 19', cost: 1640, offer: '5% Cashback' },
    ]
  }
}
