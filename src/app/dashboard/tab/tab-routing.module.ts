import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: 'dashboard',
    component: TabPage,
    children: [
      {
        path: 'tab-qr',
        loadChildren: () => import('../tab-qr/tabQr.module').then(m => m.TabQrPageModule)
      },
      {
        path: '',
        redirectTo: '/dashboard/tab-qr',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabRoutingModule {}
