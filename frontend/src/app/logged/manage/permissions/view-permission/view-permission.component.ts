import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Permission } from '../../../../shared/interfaces/permission';
import { PermissionService } from '../permission.service';


@Component({
  selector: 'app-view-permission',
  templateUrl: './view-permission.component.html',
  styleUrls: ['./view-permission.component.css']
})

export class ViewPermissionComponent implements OnInit {
  moduleTitle = 'Manage Permissions';
  moduleSubTitle = 'Permission details';
  public permissionId: any;
  public permission: Permission;

  constructor(
    private permissionService: PermissionService,
    private activatedRoute: ActivatedRoute,
    ) {
      this.permissionId = activatedRoute.snapshot.params['id'];
    }

    getPermission(permissionId) {
      this.permissionService.getPermission(permissionId).then((result) => {
        this.permission = result as Permission;
      }, (error) => {
      });
    }

    ngOnInit() {
      this.getPermission(this.permissionId);
    }
}
