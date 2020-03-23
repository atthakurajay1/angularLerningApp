import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppCommonServiceService } from 'src/app/core/app-common-service.service';
import { ViewServiceService } from './view-service.service';



@Component({
  selector: 'app-view-provider-exp',
  template: `<p class="colorgreen">work fine comp in app {{ appName}} and view servie name {{ viewName }}</p> start child conmp 
  <app-child-comp settemp="b">
     <input type"text" placeholder="ajay projection">
  </app-child-comp>`,
  styleUrls: ['./view-provider-exp.component.css'],
  providers: [ViewServiceService]
})
export class ViewProviderExpComponent implements OnInit {

  appName: string;
  viewName: string
  constructor(private appService: AppCommonServiceService, private viewService: ViewServiceService) { }

  ngOnInit() {
    console.log(this.appService._appName)
    this.appName = this.appService._appName;
    this.viewName = this.viewService.viewpm;
  }

}
