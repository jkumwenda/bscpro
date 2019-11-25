import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from './role.service';
import { Role } from '../../../shared/interfaces/role';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})

export class RolesComponent implements OnInit {
  moduleTitle = 'Manage roles';
  moduleSubTitle = 'List of roles';
  public roles: Role[];
  public role: Role;

  constructor(
    private roleService: RoleService,
    private router: Router
  ) { }

  getRoles() {
    this.roleService.getRoles().then((result) => {
      this.roles = result as Role[];
    }, (error) => {
    });
  }

  viewRole(roleId) {
    this.router.navigate(['/manage/roles/view-role', roleId]);
  }

  editRole(roleId) {
    this.router.navigate(['/manage/roles/edit-role', roleId]);
  }

  deleteRole(roleId) {
    this.roleService.deleteRole(roleId).then((result) => {
      this.getRoles();
    }, (error) => {
    });
  }
  ngOnInit() {
    this.getRoles();
  }

}
