import { Injectable } from '@angular/core';

@Injectable()
export class AppCommonServiceService {

  _appName: string = "Angular Application"

  constructor() { }

  public get appName() {
    return this._appName;
  }

  public set appName(name: string) {
    this._appName = name;
  }

}
