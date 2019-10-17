import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageModule } from './manage/manage.module';

import { LoggedComponent } from './logged.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageComponent } from './manage/manage.component';

const loggedRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'manage', component: ManageComponent },
];

@NgModule({
  declarations: [
    ManageComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    ManageModule,
    RouterModule.forChild(loggedRoutes),
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [LoggedComponent]
})
export class LoggedModule { }
