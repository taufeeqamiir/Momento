import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeacefulPageRoutingModule } from './peaceful-routing.module';

import { PeacefulPage } from './peaceful.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeacefulPageRoutingModule
  ],
  declarations: [PeacefulPage]
})
export class PeacefulPageModule {}
