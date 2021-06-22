import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HomeGuard } from '../guards/home.guard';
import { UserDataResolver } from '../resolvers/userData.resolver';
import { IonicModule } from '@ionic/angular';


const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    canActivate : [HomeGuard],
    resolve : {
                userData : UserDataResolver
              },
    children:[
      {
        path:'',
        loadChildren:() => 
        import('../pages/urldisp/urldisp.module').then(
          m => m.UrldispPageModule

        )
      },
      {
        path:'urldisp',
        loadChildren:() => 
        import('../pages/urldisp/urldisp.module').then(
          m => m.UrldispPageModule

        )
      },
      {
        path:'notfications',
        loadChildren:() => 
        import('../pages/notfications/notfications.module').then(
          m => m.NotficationsPageModule

        )
      },
      {
        path:'logout',
        loadChildren:() => 
        import('../pages/logout/logout.module').then(
          m => m.LogoutPageModule

        )
      }
    ]
  }
  // ,
  // {
  // path: '',
  //   redirectTo: '/home/urldisp',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes), IonicModule] ,
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
