import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';
import { AboutComponent } from '../about/about.component';
import { ComponentsModule } from '../components.module';
import { AboutModule } from '../about/about.module';
import { VisitModule } from '../visit/visit.module';
import { FeatureModule } from '../feature/feature.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    AboutModule,
    VisitModule,
    FeatureModule,
    RouterModule.forChild([
      {path:"",component:AboutPageComponent}
    ])
  ]
})
export class AboutPageModule { }
