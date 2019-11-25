import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from '../../../../shared/interfaces/role';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})

export class EditRoleComponent implements OnInit {
  moduleTitle = 'Manage Roles';
  moduleSubTitle = 'Add Role';
  public roleId: any;
  public roleForm: FormGroup;
  public role: Role;
  private roleData: any;

  constructor(
    private formBuilder: FormBuilder,
    private roleService: RoleService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.roleId = activatedRoute.snapshot.params['id'];
    this.initializeRoleForm();
    this.getRole(this.roleId);
  }

  getRole(roleId) {
    this.roleService.getRole(roleId).then((result) => {
      this.role = result as Role;
      this.initializeRoleForm();
    }, (error) => {
      console.log(error);
    });
  }

  editRole() {
    const data  = this.roleForm.value;
    this.roleData = {
      role: data.role,
      role_description: data.roleDescription
    };

    this.roleService.editRole(this.roleId, this.roleData).then((result) => {
      this.router.navigate(['/manage/roles/']);
    }, (error) => {
      console.log(error);
    });
  }

  initializeRoleForm() {
    if (this.role == null) {
      this.role = new Role();
      this.role.role = null;
      this.role.role_description = null;
    }
    this.roleForm = this.formBuilder.group({
      role: [this.role.role, Validators.compose([Validators.required])],
      roleDescription: [this.role.role_description, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
  }

}
