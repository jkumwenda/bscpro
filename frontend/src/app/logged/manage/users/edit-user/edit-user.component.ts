import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../shared/services/user.service';
import { User } from '../../../../shared/interfaces/user';
import { Profile } from '../../../../shared/interfaces/profile';
import { Title } from '../../../../shared/interfaces/title';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  moduleTitle = 'Manage user';
  moduleSubTitle = 'Edit user';
  public userForm: FormGroup;
  public userId: any;
  public user: User;
  public profile: Profile;
  public title: Title;
  private userData: any;

  constructor(
    private formBuilder: FormBuilder,
    private titleService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.userId = activatedRoute.snapshot.params['id'];
    this.initializeUserForm();
  }

  getUser(userId) {
    this.titleService.getUserByID(userId).then((result) => {
      this.user = result as User;
      this.initializeUserForm();
    }, (error) => {
    });
  }

  initializeUserForm() {
    if (this.profile == null) {
      this.profile = new Profile();
      this.profile.user = new User();
      this.profile.title = new Title();

      this.profile.title.title = null;
      this.profile.user.first_name = null;
      this.profile.user.last_name = null;
      this.profile.user.email = null;
      this.profile.mobile = null;
      this.profile.profile_photo = null;
    }
    this.userForm = this.formBuilder.group({
      title: [this.profile.title.title, Validators.compose([Validators.required])],
      first_name: [this.profile.user.first_name , Validators.compose([Validators.required])],
      last_name: [this.profile.user.last_name, Validators.compose([Validators.required])],
      email: [this.profile.user.email, Validators.compose([Validators.required])],
      mobile: [this.profile.mobile, Validators.compose([Validators.required])],
      profile_photo: [this.profile.profile_photo, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.getUser(this.userId);
  }

}

