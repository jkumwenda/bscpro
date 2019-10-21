import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageComponent } from './manage.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { RolesComponent } from './roles/roles.component';
import { AddRoleComponent } from './roles/add-role/add-role.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { TabsComponent } from './tabs/tabs.component';

const manageRoutes: Routes = [
  {path: 'manage', component: ManageComponent, children: [
    {path: 'users', component: UsersComponent},
    {path: 'users/add-user', component: AddUserComponent},
    {path: 'roles', component: RolesComponent},
    {path: 'roles/add-role', component: AddRoleComponent},
  ]},
];

@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    RolesComponent,
    AddRoleComponent,
    SidebarComponent,
    TabsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(manageRoutes),
  ],
  exports: [RouterModule, SidebarComponent]
})
export class ManageModule { }
