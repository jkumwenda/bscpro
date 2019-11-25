import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { HttpClientModule } from '@angular/common/http';    // add this
import { FormsModule, ReactiveFormsModule } from '@angular/forms';    // add this
import { AuthService } from './shared/services/auth.service';    // add this

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggedModule } from './logged/logged.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    LoggedModule,
    SharedModule,
    NgxUiLoaderModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
