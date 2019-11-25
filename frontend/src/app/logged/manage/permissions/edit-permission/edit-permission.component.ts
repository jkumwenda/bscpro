import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Permission } from '../../../../shared/interfaces/permission';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-edit-permission',
  templateUrl: './edit-permission.component.html',
  styleUrls: ['./edit-permission.component.css']
})

export class EditPermissionComponent implements OnInit {
  moduleTitle = 'Manage permissions';
  moduleSubTitle = 'Add permission';
  public permissionId: any;
  public permissionForm: FormGroup;
  public permission: Permission;
  private permissionData: any;

  constructor(
    private formBuilder: FormBuilder,
    private permissionService: PermissionService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.permissionId = activatedRoute.snapshot.params['id'];
    this.initializePermissionForm();
    this.getpermission(this.permissionId);
  }

  getpermission(permissionId) {
    this.permissionService.getPermission(permissionId).then((result) => {
      this.permission = result as Permission;
      this.initializePermissionForm();
    }, (error) => {
      console.log(error);
    });
  }

  editPermission() {
    const data  = this.permissionForm.value;
    this.permissionData = {
      permission: data.permission,
      permission_description: data.permissionDescription
    };

    this.permissionService.editPermission(this.permissionId, this.permissionData).then((result) => {
      this.router.navigate(['/manage/permissions/']);
    }, (error) => {
      console.log(error);
    });
  }

  initializePermissionForm() {
    if (this.permission == null) {
      this.permission = new Permission();
      this.permission.permission = null;
      this.permission.permission_description = null;
    }
    this.permissionForm = this.formBuilder.group({
      permission: [this.permission.permission, Validators.compose([Validators.required])],
      permissionDescription: [this.permission.permission_description, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
  }

}
