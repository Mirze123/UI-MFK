import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../components.module';
import { RouterModule } from '@angular/router';
import { AboutModule } from '../about/about.module';
import { BlogModule } from '../blog/blog.module';
import { FeatureModule } from '../feature/feature.module';
import { ProductsModule } from '../products/products.module';
import { SliderModule } from '../slider/slider.module';
import { TestimonialModule } from '../testimonial/testimonial.module';
import { VisitModule } from '../visit/visit.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AboutModule,
    BlogModule,
    FeatureModule,
    ProductsModule,
    SliderModule,
    TestimonialModule,
    VisitModule,
    RouterModule.forChild([
      {path:"",component:HomeComponent}
    ])
  ]
})
export class HomeModule { }
