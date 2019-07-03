import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
