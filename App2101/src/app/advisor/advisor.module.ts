import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvisorPageRoutingModule } from './advisor-routing.module';

import { AdvisorPage } from './advisor.page';

import { AutosizeModule } from 'ngx-autosize';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvisorPageRoutingModule,
    AutosizeModule
  ],
  declarations: [AdvisorPage]
})
export class AdvisorPageModule {}
