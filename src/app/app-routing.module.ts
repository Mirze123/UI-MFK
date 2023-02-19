import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './ui/components/error-page/error-page.component';
import { HomeComponent } from './ui/components/home/home.component';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
{path:"", component:LayoutComponent,children:[
  {path:"",component:HomeComponent},
  {path:"about",loadChildren:()=> import('./ui/components/about-page/about-page.module').then(module=>module.AboutPageModule)},
  {path:"products",loadChildren:()=> import('./ui/components/products-page/products-page.module').then(module=>module.ProductsPageModule)},
  {path:"blog",loadChildren:()=> import('./ui/components/blog-page/blog-page.module').then(module=>module.BlogPageModule)},
  {path:"feature",loadChildren:()=> import('./ui/components/feature-page/feature-page.module').then(module=>module.FeaturePageModule)},
  {path:"testimonial",loadChildren:()=> import('./ui/components/testimonial-page/testimonial-page.module').then(module=>module.TestimonialPageModule)},
  {path:"contact",loadChildren:()=> import('./ui/components/contact-page/contact-page.module').then(module=>module.ContactPageModule)},
  {path:"**",component:ErrorPageComponent}
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
