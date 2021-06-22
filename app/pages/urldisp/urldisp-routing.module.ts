import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrldispPage } from './urldisp.page';

const routes: Routes = [
  {
    path: '',
    component: UrldispPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrldispPageRoutingModule {}
