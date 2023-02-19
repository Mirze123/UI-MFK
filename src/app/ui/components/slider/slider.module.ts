import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SliderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SliderComponent
  ]
})
export class SliderModule { }
