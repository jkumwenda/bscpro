import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from '../../../../shared/interfaces/role';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})

export class AddRoleComponent implements OnInit {
  moduleTitle = 'Manage Roles';
  moduleSubTitle = 'Add Role';
  public roleForm: FormGroup;
  public role: Role;
  private roleData: any;

  constructor(
    private formBuilder: FormBuilder,
    private roleService: RoleService,
    private ngxService: NgxUiLoaderService,
    private router: Router,
  ) { }

  addRole() {
    const data  = this.roleForm.value;
    this.roleData = {
      role: data.role,
      role_description: data.roleDescription
    };

    this.roleService.addRole(this.roleData).then((result) => {
      console.log(result);
      this.router.navigate(['/manage/roles']);
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.roleForm = this.formBuilder.group({
      role: ['', Validators.compose([Validators.required])],
      roleDescription: ['', Validators.compose([Validators.required])],
    });
  }
}
