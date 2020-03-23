import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContentLoadingComponent } from './content-loading/content-loading.component';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { AppReactiveFormComponent } from './app-reactive-form/app-reactive-form.component';
import { AppMaterailModule } from '../../app-materail.module';


@NgModule({
  declarations: [ContentLoadingComponent, AppReactiveFormComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FlexModule,
    ReactiveFormsModule,
    AppMaterailModule
  ],
  exports: [ContentLoadingComponent, AppReactiveFormComponent]
})

export class SharedModule { }
