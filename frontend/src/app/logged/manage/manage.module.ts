import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageRoutingModule } from './manage-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
// Components section
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { RolesComponent } from './roles/roles.component';
import { AddRoleComponent } from './roles/add-role/add-role.component';
import { ViewRoleComponent } from './roles/view-role/view-role.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { TabsComponent } from './tabs/tabs.component';
import { TitlesComponent } from './titles/titles.component';
import { AddTitleComponent } from './titles/add-title/add-title.component';
import { EditTitleComponent } from './titles/edit-title/edit-title.component';
import { ViewTitleComponent } from './titles/view-title/view-title.component';
import { EditRoleComponent } from './roles/edit-role/edit-role.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { AddPermissionComponent } from './permissions/add-permission/add-permission.component';
import { EditPermissionComponent } from './permissions/edit-permission/edit-permission.component';
import { ViewPermissionComponent } from './permissions/view-permission/view-permission.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    ViewUserComponent,
    RolesComponent,
    AddRoleComponent,
    EditRoleComponent,
    ViewRoleComponent,
    SidebarComponent,
    TabsComponent,
    TitlesComponent,
    AddTitleComponent,
    EditTitleComponent,
    ViewTitleComponent,
    PermissionsComponent,
    AddPermissionComponent,
    EditPermissionComponent,
    ViewPermissionComponent,
    EditUserComponent,
  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,
    HttpClientModule,
    DataTablesModule
  ],
  exports: [
    RouterModule,
    SidebarComponent,
    ManageRoutingModule
  ]
})
export class ManageModule { }
