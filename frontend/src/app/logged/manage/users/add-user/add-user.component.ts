import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../../shared/interfaces/user';
import { UserService } from '../../../../shared/services/user.service';
import { TitleService } from '../../../../shared/services/title.service';
import { Title } from './../../../../shared/interfaces/title';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {
  moduleTitle = 'Manage users';
  moduleSubTitle = 'Add user';
  public userForm: FormGroup;
  public user: User;
  public titles: Title[];
  private userData: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private titleService: TitleService,
    private router: Router
    ) {
   }

  addUser() {
    const data  = this.userForm.value;
    this.userData = {
      userprofile: {fk_titleid: data.title},
      first_name: data.first_name,
      last_name: data.first_name,
      email: data.email,
      mobile: data.mobile,
      username: data.username,
      password: data.password,
    };
    this.userService.addUser(this.userData).then((result) => {
      console.log(result);
      this.router.navigate(['/manage/user']);
    }, (error) => {
      console.log(error);
    });
  }

  getTitles() {
    this.titleService.getTitles().then((result) => {
      this.titles = result as Title[];
    }, (error) => {
    });
  }

  ngOnInit() {
    this.getTitles();

    this.userForm = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      first_name: ['', Validators.compose([Validators.required])],
      last_name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      mobile: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }
}
