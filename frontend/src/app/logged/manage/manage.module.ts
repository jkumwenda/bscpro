import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { RolesComponent } from './roles/roles.component';
import { AddRoleComponent } from './roles/add-role/add-role.component';

const manageRoutes: Routes = [
  {path: 'manage/users', component: UsersComponent},
  {path: 'manage/users/add-user', component: AddUserComponent},
  {path: 'manage/roles', component: RolesComponent},
  {path: 'manage/roles/add-role', component: AddRoleComponent},
];

@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    RolesComponent,
    AddRoleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(manageRoutes),
  ],
  exports: [RouterModule]
})
export class ManageModule { }
