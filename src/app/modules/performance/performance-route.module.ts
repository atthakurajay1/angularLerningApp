import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PerformanceDashboardComponent } from './performance-dashboard/performance-dashboard.component'
import { ViewProviderExpComponent } from '../performance/view-provider-exp/view-provider-exp.component';


const pmRoute: Routes = [
  { "path": "pmdashboard", "component": PerformanceDashboardComponent },
  { "path": "", "component": PerformanceDashboardComponent, pathMatch: "full" },
  { "path": "comp", "component": ViewProviderExpComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(pmRoute)
  ],
  exports: [RouterModule]
})
export class PerformanceRouteModule { }
