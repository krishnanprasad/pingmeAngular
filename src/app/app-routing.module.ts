import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { TransactionComponent } from './Components/transaction/transaction.component';
import { NotificationComponent } from './Components/notification/notification.component';
import { HomeComponent } from './Components/home/home.component';
import { AddPingComponent } from './Components/add-ping/add-ping.component';
import { ServiceDescriptionComponent } from './Components/service-description/service-description.component';
import { OTPVerifyComponent } from './Components/otpverify/otpverify.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full'
  },
  {
    path: 'Login',
    component: LoginPageComponent
  },
  {
    path: 'VerifyOTP/:OTP/PhoneNumber/:PhoneNumber',
    component: OTPVerifyComponent
  },
  {
    path: 'AddPing',
    component: AddPingComponent
  },
  {
    path: 'Home',
    component: HomeComponent,
    children: [
      {
        path: 'Dashboard',
        component: DashboardComponent,
      },
      {
        path: 'Transaction',
        component: TransactionComponent,
      },
      {
        path: 'Notification',
        component: NotificationComponent,
      },
      {
        path: 'ServiceDetails/:chitid',
        component: ServiceDescriptionComponent
      }  
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
