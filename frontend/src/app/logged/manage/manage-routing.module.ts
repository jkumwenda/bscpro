import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageComponent } from './manage.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { RolesComponent } from './roles/roles.component';
import { AddRoleComponent } from './roles/add-role/add-role.component';
import { EditRoleComponent } from './roles/edit-role/edit-role.component';
import { ViewRoleComponent } from './roles/view-role/view-role.component';
import { TabsComponent } from './tabs/tabs.component';
import { TitlesComponent } from './titles/titles.component';
import { AddTitleComponent } from './titles/add-title/add-title.component';
import { EditTitleComponent } from './titles/edit-title/edit-title.component';
import { ViewTitleComponent } from './titles/view-title/view-title.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { AddPermissionComponent } from './permissions/add-permission/add-permission.component';
import { EditPermissionComponent } from './permissions/edit-permission/edit-permission.component';
import { ViewPermissionComponent } from './permissions/view-permission/view-permission.component';
import { AuthGuard } from '../../shared/services/auth-guard.service';

const manageRoutes: Routes = [
  {path: 'manage', component: ManageComponent, children: [
    {path: 'tabs', component: TabsComponent},
    {path: 'users', component: UsersComponent},
    {path: 'users/add-user', component: AddUserComponent},
    {path: 'users/edit-user/:id', component: EditUserComponent},
    {path: 'users/view-user/:id', component: ViewUserComponent},
    {path: 'roles', component: RolesComponent},
    {path: 'roles/add-role', component: AddRoleComponent},
    {path: 'roles/edit-role/:id', component: EditRoleComponent},
    {path: 'roles/view-role/:id', component: ViewRoleComponent},
    {path: 'titles', component: TitlesComponent},
    {path: 'titles/add-title', component: AddTitleComponent},
    {path: 'titles/edit-title/:id', component: EditTitleComponent},
    {path: 'titles/view-title/:id', component: ViewTitleComponent},
    {path: 'permissions', component: PermissionsComponent},
    {path: 'permissions/add-permission', component: AddPermissionComponent},
    {path: 'permissions/edit-permission/:id', component: EditPermissionComponent},
    {path: 'permissions/view-permission/:id', component: ViewPermissionComponent},
  ]},
];


@NgModule({
  imports: [RouterModule.forRoot(manageRoutes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
