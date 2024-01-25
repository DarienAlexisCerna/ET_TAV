import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  handlerMessage='';      //devuelve un string con un mensaje
  roleMessage='';         //devuelve el valor interno del botón (confirm, cancel)

  constructor(private alertController: AlertController,
              private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }



  //metodo que envía un saludo 
  async Saludar() {
    const alert = await this.alertController.create({
      header: 'Saludo',
      subHeader: 'Bienvenid@!',
      message: 'Que tengas un gran día',
      buttons: ['OK'],
    });

    await alert.present();
  }

  //metodo que ingresa datos 
  async Ingresar() {
    const alert = await this.alertController.create({
      header: 'Ingrese sus datos',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Name',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }

  //metodo que crea una alerta con dos botones
  async Confirmar() {
    const alert = await this.alertController.create({
      header: 'Confirme acción!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Confirmación cancelada';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Confirmación aceptada';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }



}
