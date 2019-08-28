import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  IsSpinner: boolean = false;
  userData = {};
  constructor(private _loginservice: LoginService, private router: Router) { }
  PhoneNumber: any;
  Password: any;
  Iserror: boolean = false;
  errorMessage: string = "Wrong Credentials..";
  ngOnInit() {

  }
  CheckUserCredetials() {
    debugger;
    if (this.PhoneNumber.length == 10) {
      this.IsSpinner = true;
      console.log('PhoneNumber' + this.PhoneNumber);

      this._loginservice.checkCredentials(this.PhoneNumber).subscribe(data => {
        if (data != "No User") {
          console.log(data);
          //this.userData = data;
          this.IsSpinner = false;
          this.router.navigate(['VerifyOTP/' + data + '/PhoneNumber/' + this.PhoneNumber])
          this.Iserror = false;
        }
        else {
          this.IsSpinner = false;
          this.Iserror = true;
          this.errorMessage = "Welcome New User";
          console.log('Password' + this.errorMessage);
        }

      }, (err) => {
        debugger;
        this.IsSpinner = false;
        alert('Something Error' + err);
        this.errorMessage = "There are some issue";
      });
    }
    else {
      alert('Phone Number should be 10 digit');
    }
  }
}
