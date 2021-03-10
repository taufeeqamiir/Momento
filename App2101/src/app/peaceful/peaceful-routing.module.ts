import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeacefulPage } from './peaceful.page';

const routes: Routes = [
  {
    path: '',
    component: PeacefulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeacefulPageRoutingModule {}
