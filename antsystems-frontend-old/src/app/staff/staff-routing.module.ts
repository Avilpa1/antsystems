import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from '../shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    },
    {
      path: 'purchase',
      loadChildren: () => import('./purchase/purchase.module').then((m) => m.PurchaseModule),
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
