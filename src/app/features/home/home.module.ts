import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';

const globalModules = [
  CommonModule,
  SharedModule
];

@NgModule({
  declarations: [ HomeComponent ],
  imports: [ globalModules ],
  exports: [ HomeComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
