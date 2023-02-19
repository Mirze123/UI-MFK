import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './products-page.component';
import { ProductsModule } from '../products/products.module';
import { VisitModule } from '../visit/visit.module';
import { TestimonialModule } from '../testimonial/testimonial.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductsPageComponent
  ],
  imports: [
    CommonModule,
    ProductsModule,
    VisitModule,
    TestimonialModule,
    RouterModule.forChild([
      {path:"",component:ProductsPageComponent}
    ])
  ]
})
export class ProductsPageModule { }
