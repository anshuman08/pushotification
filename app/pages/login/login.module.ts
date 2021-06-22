import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ComponentsModule } from 'src/app/components/components.module';

import { HttpClientModule } from '@angular/common/http';

// import { AuthService } from 'src/app/services/auth.service';
// import { AuthConstants } from 'src/app/config/auth-constants';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ComponentsModule,
    HttpClientModule
 //   AuthService,
   // AuthConstants
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
