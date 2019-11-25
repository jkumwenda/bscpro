import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggedComponent } from './logged.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageComponent } from './manage/manage.component';
import { AuthGuard } from '../shared/services/auth-guard.service';

const loggedRoutes: Routes = [
  { path: 'logged', component: LoggedComponent, children: [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'manage', component: ManageComponent },
  ], canActivate: [AuthGuard]}
];


@NgModule({
  imports: [RouterModule.forRoot(loggedRoutes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }
