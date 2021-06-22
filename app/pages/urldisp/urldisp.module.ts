import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UrldispPageRoutingModule } from './urldisp-routing.module';

import { UrldispPage } from './urldisp.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UrldispPageRoutingModule
  ],
  declarations: [UrldispPage]
})
export class UrldispPageModule {}
