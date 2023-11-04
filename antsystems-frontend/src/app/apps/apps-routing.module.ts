import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from '../shell/shell.service';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  Shell.childRoutes([
    {
        path: 'menu',
        component: MenuComponent
    },
    {
      path: 'inventory',
      loadChildren: () => import('./inventory/inventory.module').then((m) => m.InventoryModule),
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
