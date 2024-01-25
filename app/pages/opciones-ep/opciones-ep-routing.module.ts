import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionesEPPage } from './opciones-ep.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionesEPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionesEPPageRoutingModule {}
