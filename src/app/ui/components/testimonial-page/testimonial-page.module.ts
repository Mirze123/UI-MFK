import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialPageComponent } from './testimonial-page.component';
import { TestimonialModule } from '../testimonial/testimonial.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TestimonialPageComponent
  ],
  imports: [
    CommonModule,
    TestimonialModule,
    RouterModule.forChild([
      {path:"",component:TestimonialPageComponent}
    ])
  ]
})
export class TestimonialPageModule { }
