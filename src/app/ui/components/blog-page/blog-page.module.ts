import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPageComponent } from './blog-page.component';
import { BlogModule } from '../blog/blog.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BlogPageComponent
  ],
  imports: [
    CommonModule,
    BlogModule,
    RouterModule.forChild([
      {path:"",component:BlogPageComponent}
    ])
  ]
})
export class BlogPageModule { }
