import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { AlumnoService } from 'src/app/service/alumno.service';

@Component({
  selector: 'app-listar-alumno',
  templateUrl: './listar-alumno.page.html',
  styleUrls: ['./listar-alumno.page.scss'],
})
export class ListarAlumnoPage implements OnInit {
  alumno=[] 
  constructor(private alumnoservice: AlumnoService, private loadCtrl: LoadingController) { }

  async ngOnInit() {
    this.loadAlumno();
  }
  
  async loadAlumno(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadCtrl.create({
      message: "Cargando...",
      spinner: "bubbles"
    });
    await loading.present();

    this.alumnoservice.listaralumno().subscribe(
      (resp)=>{
        loading.dismiss();
        console.log(resp);
        let listString = JSON.stringify(resp) //convertimos a string el JSON que creamos
        this.alumno = JSON.parse(listString)
        event?.target.complete();
      },
      (err)=>{
        console.log(err.message)
        loading.dismiss();
      }
    )
  }

}
