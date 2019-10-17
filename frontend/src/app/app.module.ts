import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggedModule } from './logged/logged.module';
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';

import { LoggedComponent } from './logged/logged.component';
import { LoginComponent } from './auth/login/login.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoggedComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DataTablesModule,
    AuthModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    LoggedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
