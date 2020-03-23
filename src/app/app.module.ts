import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpDetailComponent } from './core/emp-detail/emp-detail.component';
import { AppMaterailModule } from './app-materail.module';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppCommonServiceService } from './core/app-common-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpDetailComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterailModule,
    FlexLayoutModule
  ],

  providers: [AppCommonServiceService],
  bootstrap: [AppComponent],
  id: "rootModule"
})
export class AppModule { }
