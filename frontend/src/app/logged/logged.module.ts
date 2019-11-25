import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ManageModule } from './manage/manage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';    // add this

import { LoggedRoutingModule } from './logged-routing.module';
import { LoggedComponent } from './logged.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageComponent } from './manage/manage.component';
import { LayoutModule } from '../layout/layout.module';

import { AuthGuard } from '../shared/services/auth-guard.service';
import { CommonService } from '../shared/services/common.service';
import { TitleService } from '../shared/services/title.service';


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
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoggedRoutingModule
  ],
  providers: [
    AuthGuard,
    CommonService,
    TitleService
  ],
  bootstrap: [LoggedComponent]
})
export class LoggedModule { }
