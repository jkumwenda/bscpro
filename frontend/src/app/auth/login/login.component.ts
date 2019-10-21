import { Component, OnInit, NgModule } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  /**
   * An object representing the user for the login form
   */
  public user: any;
  public test: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = {
      username: '',
      password: ''
    };
  }

  login() {
    this.authService.login({username: this.user.username, password: this.user.password});
  }

}
