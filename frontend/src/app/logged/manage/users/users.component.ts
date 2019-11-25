import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/interfaces/user';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  moduleTitle = 'Manage users';
  moduleSubTitle = 'List of users';
  public users: User[];
  public user: User;
  diagtitle = 'angular-confirmation-dialog';
  message: string;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  getUsers() {
    this.userService.getUsers().then((result) => {
      this.users = result as User[];
    }, (error) => {
    });
  }

  viewUser(userId) {
    this.router.navigate(['/manage/users/view-user', userId]);
  }

  editUser(userId) {
    this.router.navigate(['/manage/users/edit-user', userId]);
  }

  deleteUser(userId) {
    this.userService.deleteUser(userId).then((result) => {
      this.getUsers();
    }, (error) => {
    });
  }

  ngOnInit() {
    this.getUsers();
  }

}
