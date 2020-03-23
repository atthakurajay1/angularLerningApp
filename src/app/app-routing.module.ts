import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.myOb.subscribe({
      next: (data: Routes) => { this.router.resetConfig(data) },
      error: (e) => { console.error(e) },
      complete: () => { console.log("reset config") }
    });
  }


  myOb = new Observable(ob => {
    const routesOnDemand: Routes = [
      { path: "configuration", loadChildren: () => import("./modules/configuration/configuration.module").then(m => m.ConfigurationModule) },
      { path: "performance", loadChildren: () => import("./modules/performance/performance.module").then(m => m.PerformanceModule) }
    ];

    ob.next(routesOnDemand);
    ob.complete();
  });

}
