import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesEPPageRoutingModule } from './opciones-ep-routing.module';

import { OpcionesEPPage } from './opciones-ep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesEPPageRoutingModule
  ],
  declarations: [OpcionesEPPage]
})
export class OpcionesEPPageModule {}
