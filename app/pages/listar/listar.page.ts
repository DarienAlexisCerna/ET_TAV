import { Component, OnInit } from '@angular/core';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Iasistencias } from '../interfaces/interfaces';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  asistencias = [];

  constructor(private apicrud: ApicrudService,
              private loadCtrl: LoadingController) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.loadasistencias();
  }

  async loadasistencias(event?: InfiniteScrollCustomEvent){
    const load = await this.loadCtrl.create({
      message : "Cargando asistencias..",
      spinner: "bubbles"
    })
    await load.present();

    this.apicrud.listarasistencias().subscribe({
      next: resp=>{
        console.log(resp);
        load.dismiss();
        let listString = JSON.stringify(resp);  //convertimos nuestro resp en un string
        this.asistencias =JSON.parse(listString); //convertimos nuestro string en JSON
        event?.target.complete();
      },
      error: err=>{
        console.log(err.error.message);
        load.dismiss();
      }
    })


  }


}
