import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarAlumnoPageRoutingModule } from './listar-alumno-routing.module';

import { ListarAlumnoPage } from './listar-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarAlumnoPageRoutingModule
  ],
  declarations: [ListarAlumnoPage]
})
export class ListarAlumnoPageModule {}
