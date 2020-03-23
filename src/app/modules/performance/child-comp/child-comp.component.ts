import { Component, OnInit, ViewEncapsulation, ViewContainerRef, TemplateRef, ViewRef, ViewChild, Input } from '@angular/core';
import { AppCommonServiceService } from 'src/app/core/app-common-service.service';
import { ViewServiceService } from '../view-provider-exp/view-service.service';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ChildCompComponent implements OnInit {

  appname: string;
  viewpn: string;
  isUserExist: boolean = false;
  userName: string = "Ajay thakur"
  itemList: Array<string> = ["amit", "ajay", "raj", "shiwa"];
  temp: string = "";

  @ViewChild("a", { static: true }) a: TemplateRef<any>;
  @ViewChild("b", { static: true }) b: TemplateRef<any>;
  @ViewChild("c", { static: true }) c: TemplateRef<any>;

  @Input() settemp;
  mytemp: any;

  tempdata: any = { "a": "this is A block data", "b": "this is b block data", "c": "this is c block data", "$implicit": "this is default implicit" }

  constructor(private appService: AppCommonServiceService, private viewSer: ViewServiceService) { }

  ngOnInit() {
    this.appname = this.appService._appName;
    this.viewpn = this.viewSer.viewpm;
    this.changeTemplate(this.settemp);
  }

  changeTemplate(data) {
    if (data == 'a') {
      this.mytemp = this.a;

    }
    if (data == 'b') {
      this.mytemp = this.b;

    }
    if (data == 'c') {
      this.mytemp = this.c;

    }
  }

}
