import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

interface Componente{
  name: string;
  icon: string;
  redirecTo: string; 
}

export interface Usuarios{ 
  nombre: string;
  isactive: boolean

}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuarios= [];
  
  componentes: Componente[]=[
    {
      name:'Ir al login',
      icon:'cafe-outline',
      redirecTo:'/login'
    },
    {
      name:'Ir a la lista',
      icon:'bug-outline',
      redirecTo:'/listar'
    },
    {
      name:'Ir al registro',
      icon:'sunny-outline',
      redirecTo:'/registro'
    },
  ]

  mensajenuevo = "¡App hecha para registrar de manera más eficaz y rápida la asistencia de DuocUc!";
  mensajenuevo1 = "Bienvenido a RegistrAPP!!";
  mensajeParpadeante = true;

  nombre: any;

  constructor(private menuController: MenuController, private router: Router,
              private alertcontroller: AlertController) {
                this.nombre= sessionStorage.getItem('username');
               }

  ngOnInit() {}
  


  mostrarMenu(){
    this.menuController.open('first');
  }
  redirectLogin() {

    this.router.navigate(['/login']);
 
  }
 
   redirectRegistro() {
 
    this.router.navigate(['/registro']);
 
  }

  redirectListar() {

    this.router.navigate(['/listar']);
  }

  redirectqr() {

    this.router.navigate(['/qr']);
  }


  cerrarSesion(){
    sessionStorage.clear();
    this.mensajeCerrar();
    this.router.navigateByUrl('/opciones-ep');
    
  }

  async mensajeCerrar(){
    const alerta = await this.alertcontroller.create({ 
      header : 'Graciaas!',
      message : 'Hasta la próxima! :D',
      buttons : ['OK']
    })
    alerta.present();
  }

  redirectcamara() {
 
    this.router.navigate(['/camara']);
 
  }

  mandarCorreo() {

    this.router.navigate(['/listar']);
  }


}

