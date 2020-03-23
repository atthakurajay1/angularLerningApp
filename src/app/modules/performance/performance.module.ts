import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformanceDashboardComponent } from './performance-dashboard/performance-dashboard.component';
import { PerformanceRouteModule } from './performance-route.module';
import { ViewProviderExpComponent } from '../performance/view-provider-exp/view-provider-exp.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PerformanceDashboardComponent, ViewProviderExpComponent, ChildCompComponent],
  imports: [
    FormsModule,
    CommonModule,
    PerformanceRouteModule
  ]
})

export class PerformanceModule { }
