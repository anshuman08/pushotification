import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotficationsPage } from './notfications.page';

const routes: Routes = [
  {
    path: '',
    component: NotficationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotficationsPageRoutingModule {}
