import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChilloutPage } from './chillout.page';

const routes: Routes = [
  {
    path: '',
    component: ChilloutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChilloutPageRoutingModule {}
