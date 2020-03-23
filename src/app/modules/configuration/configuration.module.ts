import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CofigurationRouteModule } from './cofiguration-route.module';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AppMaterailModule } from '../../app-materail.module';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { SharedModule } from '../../core/shared/shared.module';


@NgModule({
  declarations: [UserCreationComponent, UserListComponent, UserDashboardComponent],
  imports: [
    CommonModule,
    CofigurationRouteModule,
    AppMaterailModule,
    FlexLayoutModule,
    FlexModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ConfigurationModule { }
