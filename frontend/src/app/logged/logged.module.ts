import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ManageModule } from './manage/manage.module';

import { LoggedRoutingModule } from './logged-routing.module';
import { LoggedComponent } from './logged.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageComponent } from './manage/manage.component';
import { LayoutModule } from '../layout/layout.module';

import { AuthGuard } from '../shared/services/auth-guard.service';


@NgModule({
  declarations: [
    LoggedComponent,
    ManageComponent,
    DashboardComponent,
  ],
  imports: [
    LoggedRoutingModule,
    BrowserModule,
    ManageModule,
    LayoutModule,
  ],
  exports: [
    LoggedRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [LoggedComponent]
})
export class LoggedModule { }
