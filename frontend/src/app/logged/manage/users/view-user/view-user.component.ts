import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../shared/services/user.service';
import { User } from '../../../../shared/interfaces/user';
import { TitleService } from '../../../../shared/services/title.service';
import { Title } from '../../../../shared/interfaces/title';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  moduleTitle = 'Manage user';
  moduleSubTitle = 'View user';
  public userId: any;
  public user: User;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.userId = activatedRoute.snapshot.params['id'];
  }

  getUser(userId) {
    this.userService.getUser(userId).then((result) => {
      this.user = result as User;
    }, (error) => {
    });
  }

  ngOnInit() {
  }

}
