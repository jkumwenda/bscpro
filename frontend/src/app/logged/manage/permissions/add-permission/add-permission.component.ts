import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Permission } from '../../../../shared/interfaces/permission';
import { PermissionService } from '../permission.service';


@Component({
  selector: 'app-add-permission',
  templateUrl: './add-permission.component.html',
  styleUrls: ['./add-permission.component.css']
})
export class AddPermissionComponent implements OnInit {
  moduleTitle = 'Manage Permission';
  moduleSubTitle = 'Add Permission';
  public permissionForm: FormGroup;
  public permission: Permission;
  private permissionData: any;

  constructor(
    private formBuilder: FormBuilder,
    private permissionService: PermissionService,
    private ngxService: NgxUiLoaderService,
    private router: Router,
  ) { }

  addPermission() {
    const data  = this.permissionForm.value;

    this.permissionData = {
      permission: data.permission,
      permission_description: data.permissionDescription
    };

    this.permissionService.addPermission(this.permissionData).then((result) => {
      this.router.navigate(['/manage/permissions']);
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.permissionForm = this.formBuilder.group({
      permission: ['', Validators.compose([Validators.required])],
      permissionDescription: ['', Validators.compose([Validators.required])],
    });
  }

}
