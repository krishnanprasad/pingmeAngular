import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/Services/user-profile.service';
import { UpdateProfile } from 'src/app/Interface/update-profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Profile: UpdateProfile = {
    UserName: '',
    Email: '',
    PhoneNumber: '',
    UserId: ''
  }
  UserId: string;
  constructor(private _ProfileService: UserProfileService) { }

  ngOnInit() {

    this.UserId = sessionStorage.getItem('userid');
    debugger;
    this._ProfileService.GetProfile(this.UserId).subscribe(getprofile => {

      if (getprofile["PhoneNumber"] != null) {
        debugger;
        this.Profile.Email = getprofile["Email"];
        this.Profile.PhoneNumber = getprofile["PhoneNumber"];
        this.Profile.UserName = getprofile["UserName"];
        this.Profile.UserId=this.UserId;
        debugger;
      }
      else {
        debugger;
      }
    }
    )
  }
  SaveProfile() {
    debugger;
    this._ProfileService.UpdateProfile(this.Profile).subscribe(userTransaction => {
      if (userTransaction != "No User") {
        debugger;
        alert('Successfully Changed');
      }
      else {

      }
    }
    )
  }
}
