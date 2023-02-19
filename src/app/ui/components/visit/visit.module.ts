import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitComponent } from './visit.component';



@NgModule({
  declarations: [
    VisitComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    VisitComponent
  ]
})
export class VisitModule { }
