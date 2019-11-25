import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PermissionService } from './permission.service';
import { Permission } from '../../../shared/interfaces/permission';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})

export class PermissionsComponent implements OnInit {
  moduleTitle = 'Manage permissions';
  moduleSubTitle = 'List of permissions';
  public permissions: Permission[];
  public permission: Permission;

  constructor(
    private permissionService: PermissionService,
    private router: Router
  ) { }

  getPermissions() {
    this.permissionService.getPermissions().then((result) => {
      this.permissions = result as Permission[];
    }, (error) => {
    });
  }

  viewPermission(permissionId) {
    this.router.navigate(['/manage/permissions/view-permission', permissionId]);
  }

  editPermission(permissionId) {
    this.router.navigate(['/manage/permissions/edit-permission', permissionId]);
  }

  deletePermission(permissionId) {
    this.permissionService.deletePermission(permissionId).then((result) => {
      this.getPermissions();
    }, (error) => {
    });
  }
  ngOnInit() {
    this.getPermissions();
  }

}
