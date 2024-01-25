import { Component, OnInit } from '@angular/core';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { Router } from '@angular/router';
import { Iasistencia} from '../interfaces/interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  newasistencia: Iasistencia={
    nombre :"",
    apellido:"",
    rut:"",
    seccion:"",
   
  }

  constructor(private apicrud: ApicrudService, 
              private router: Router) { }

  ngOnInit() {
  }

  crearAsistencia(){
    this.apicrud.crearasistencia(this.newasistencia).subscribe();
    this.router.navigateByUrl("/listar");
  }

}
