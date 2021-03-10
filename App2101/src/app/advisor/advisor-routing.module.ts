import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvisorPage } from './advisor.page';

const routes: Routes = [
  {
    path: '',
    component: AdvisorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvisorPageRoutingModule {}
