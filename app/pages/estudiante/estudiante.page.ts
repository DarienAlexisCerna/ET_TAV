import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

import { alumnos } from 'src/app/Interface/alumnos';

import { AlumnoService } from 'src/app/service/alumno.service';

import {Router} from '@angular/router';


@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.page.html',
  styleUrls: ['./estudiante.page.scss'],
})
export class EstudiantePage implements OnInit {

  newalumno: alumnos={
    nombre:"",
  }

  constructor(private menuController: MenuController, private barcodeScanner: BarcodeScanner, private alumnoservice: AlumnoService,
    private router: Router) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }


  scaner(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }

}

