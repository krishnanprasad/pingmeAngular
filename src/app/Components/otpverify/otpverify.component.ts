import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { LoginService } from 'src/app/Services/login.service';
@Component({
  selector: 'app-otpverify',
  templateUrl: './otpverify.component.html',
  styleUrls: ['./otpverify.component.css']
})
export class OTPVerifyComponent implements OnInit {
  public OTP: string;
  public PhoneNumber: string;
  private Userdata:any;
  Iserror: boolean = false;
  Username:any;
  errorMessage: string = "Wrong Credentials..";
  constructor(private route: ActivatedRoute, private _loginservice: LoginService, private router: Router) { }

  ngOnInit() {
    this.OTP = this.route.snapshot.paramMap.get("OTP");
    this.PhoneNumber = this.route.snapshot.paramMap.get("PhoneNumber");
  }
  VerifyOTP() {
    this._loginservice.verifyUser(this.PhoneNumber, this.OTP).subscribe(data => {
      if (data != "No User") {
        this.Userdata=data["userid"];
        this.Username=data["username"];
       
        
        sessionStorage.setItem('userid',this.Userdata);
        sessionStorage.setItem('username',this.Username);
        //this.userData = data;
        this.router.navigate(['/Home/Dashboard']);
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
}
