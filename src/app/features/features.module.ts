import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SignupComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    SignupComponent,
    UserComponent,
    FormsModule
  ]
})
export class FeaturesModule { }
