import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Role } from '../../../../shared/interfaces/role';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.css']
})

export class ViewRoleComponent implements OnInit {
  moduleTitle = 'Manage Roles';
  moduleSubTitle = 'Role details';
  public roleId: any;
  public role: Role;

  constructor(
    private roleService: RoleService,
    private activatedRoute: ActivatedRoute,
    ) {
      this.roleId = activatedRoute.snapshot.params['id'];
    }

    getRole(roleId) {
      this.roleService.getRole(roleId).then((result) => {
        this.role = result as Role;
      }, (error) => {
        console.log(error);
      });
    }

    ngOnInit() {
      this.getRole(this.roleId);
    }
}
