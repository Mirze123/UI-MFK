import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page.component';
import { ContactModule } from '../contact/contact.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    ContactModule,
    RouterModule.forChild([
      {path:"",component:ContactPageComponent}
    ])
  ]
})
export class ContactPageModule { }
