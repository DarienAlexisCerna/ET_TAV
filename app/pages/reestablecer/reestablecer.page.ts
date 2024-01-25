import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-reestablecer',
  templateUrl: './reestablecer.page.html',
  styleUrls: ['./reestablecer.page.scss'],
})
export class ReestablecerPage implements OnInit {

  constructor(private alertController: AlertController, private menuController: MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');

  }


  usuario = {
    nombre:'',
    email: '',
    password:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

  async Saludo() {
    const alert = await this.alertController.create({
      message: '¡Inicio de sesión exitoso!',
      buttons: ['OK'],
    });

    await alert.present();
  }


  async nueva() {
    const alert = await this.alertController.create({
      message: '¡Contraseña reestablecida!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
