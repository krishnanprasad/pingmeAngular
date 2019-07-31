import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { TransactionComponent } from './Components/transaction/transaction.component';
import { ServiceCardComponent } from './Common/service-card/service-card.component';
import { NavbarComponent } from './Common/navbar/navbar.component';
import { ServicecardimgComponent } from './Common/servicecardimg/servicecardimg.component';
import { ModalSidebarComponent } from './Conventional/modal-sidebar/modal-sidebar.component';
import { NotificationComponent } from './Components/notification/notification.component';
import { FeedsComponent } from './Components/Notification/feeds/feeds.component';
import { InvitationComponent } from './Components/Notification/invitation/invitation.component';
import { HomeComponent } from './Components/home/home.component';
import { AddPingComponent } from './Components/add-ping/add-ping.component';
import { FormsModule } from '@angular/forms';
import { ServiceDescriptionComponent } from './Components/service-description/service-description.component';
import { LayoutComponent } from './Components/layout- NR/layout.component';
import { TransactionTablePaymentComponent } from './Common/transaction-table-payment/transaction-table-payment.component';
import { BidTableComponent } from './Common/bid-table/bid-table.component';
import { OTPVerifyComponent } from './Components/otpverify/otpverify.component';
import { ChitCardComponent } from './Common/chit-card/chit-card.component';
import { PaymentPageComponent } from './Components/payment-page/payment-page.component';
import { DummyPageComponent } from './Components/dummy-page/dummy-page.component';
import { ModalComponent } from './Common/Modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginPageComponent,
    TransactionComponent,
    ServiceCardComponent,
    NavbarComponent,
    ServicecardimgComponent,
    ModalSidebarComponent,
    NotificationComponent,
    FeedsComponent,
    InvitationComponent,
    HomeComponent,
    AddPingComponent,
    ServiceDescriptionComponent,
    LayoutComponent,
    TransactionTablePaymentComponent,
    BidTableComponent,
    OTPVerifyComponent,
    ChitCardComponent,
    PaymentPageComponent,
    ModalComponent,
    DummyPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
