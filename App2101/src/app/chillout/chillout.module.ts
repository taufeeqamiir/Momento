import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChilloutPageRoutingModule } from './chillout-routing.module';

import { ChilloutPage } from './chillout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChilloutPageRoutingModule
  ],
  declarations: [ChilloutPage]
})
export class ChilloutPageModule {}
