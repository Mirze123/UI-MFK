import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { FeatureComponent } from './feature/feature.component';
import { ProductsComponent } from './products/products.component';
import { SliderComponent } from './slider/slider.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { VisitComponent } from './visit/visit.component';
import { HomeModule } from './home/home.module';
import { AboutPageModule } from './about-page/about-page.module';
import { ProductsPageModule } from './products-page/products-page.module';
import { BlogPageModule } from './blog-page/blog-page.module';
import { FeaturePageModule } from './feature-page/feature-page.module';
import { TestimonialPageModule } from './testimonial-page/testimonial-page.module';
import { ContactPageModule } from './contact-page/contact-page.module';
import { ErrorComponent } from './error/error.component';
import { ErrorPageModule } from './error-page/error-page.module';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeModule,
    AboutPageModule,
    ProductsPageModule,
    BlogPageModule,
    FeaturePageModule,
    TestimonialPageModule,
    ContactPageModule,
    ErrorPageModule
  ],
  exports:[
    
  ]
})
export class ComponentsModule { }
