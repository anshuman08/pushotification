import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotficationsPageRoutingModule } from './notfications-routing.module';

import { NotficationsPage } from './notfications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotficationsPageRoutingModule
  ],
  declarations: [NotficationsPage]
})
export class NotficationsPageModule {}
