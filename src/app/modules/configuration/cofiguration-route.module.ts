import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


const configurationRoute: Routes = [
  { "path": "", "redirectTo": "userDashboard", "pathMatch": "full" },
  { "path": "userCreate", "component": UserCreationComponent, data: {} },
  { "path": "userList", "component": UserListComponent, data: {} },
  { "path": "userDashboard", "component": UserDashboardComponent, data: {} }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(configurationRoute)
  ],
  exports: [RouterModule]
})
export class CofigurationRouteModule { }
