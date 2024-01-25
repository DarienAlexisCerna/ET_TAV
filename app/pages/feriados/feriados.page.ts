import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { FeriadoschileService } from '../../service/feriadoschile.service';
import { Article } from '../../Interface/interface';

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {

  feriados: Article[]=[];

  constructor(private menuController: MenuController,
              private feriadoschile: FeriadoschileService) { }

  ngOnInit() {
    this.feriadoschile.getFeriados().subscribe(resp =>{
      console.log('Feriados', resp);
      this.feriados = resp;
    })
  }

  mostrarMenu(){
    this.menuController.open('first');

  }

}
