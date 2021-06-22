import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'home',
    component: TabsPage,
    children: [
      {
        path: 'urldisp',
        loadChildren: () => import('../pages/urldisp/urldisp.module').then(m => m.UrldispPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../pages/notfications/notfications.module').then(m => m.NotficationsPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../pages/logout/logout.module').then(m => m.LogoutPageModule)
      },
      {
        path: '',
        redirectTo: '/home/urldisp',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/urldisp',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
