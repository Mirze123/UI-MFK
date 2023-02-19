import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturePageComponent } from './feature-page.component';
import { FeatureModule } from '../feature/feature.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FeaturePageComponent
  ],
  imports: [
    CommonModule,
    FeatureModule,
    RouterModule.forChild([
      {path:"",component:FeaturePageComponent}
    ])
  ]
})
export class FeaturePageModule { }
