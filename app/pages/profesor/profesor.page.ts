import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { IregistrarP } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {

  registroForm: FormGroup;

  userdata: any;

  usuario : IregistrarP={
    username: '',
    password: '',
    rut:'',
    role: '',
    isactive: false,
    id: 0,
  }
  constructor(private authservice: AuthService, 
              private alertcontroller: AlertController,
              private router: Router,
              private fBuilder: FormBuilder) {
                this.registroForm = this.fBuilder.group({ 
                  'username' : new FormControl ("", [Validators.required, Validators.minLength(3)]),
                  'password': new FormControl("", [Validators.required, Validators.minLength(3)]),
                  'rol': new FormControl("", Validators.required)

                })
               }

  ngOnInit() {
  }

  registrarUsuario(){
    if (this.registroForm.valid){
      //implementar que el usuario no se repita, en caso que ya existe enviar un mensaje
      this.authservice.BuscarUsuarioId(this.registroForm.value.username).subscribe(resp=>{
        this.userdata = resp; 
        if(this.userdata.length>0){
           this.registroForm.reset();
          this.errorDuplicidad();
        }
        else{
          this.usuario.username = this.registroForm.value.username;
          this.usuario.password = this.registroForm.value.password;
          this.usuario.rut = this.registroForm.value.rut;
          this.usuario.role = this.registroForm.value.rol;
          this.usuario.isactive=true;
          this.authservice.CrearUsuario(this.usuario).subscribe();
          this.registroForm.reset();
          this.mostrarMensaje();
          this.router.navigateByUrl('/login');
        }
      })
    }
  }

  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Usuario creado',
      message: 'Bienvenid@! ' + this.usuario.username,
      buttons: ['OK']
    });
    alerta.present();
  }

  async errorDuplicidad(){
    const alerta = await this.alertcontroller.create({
      header: 'Error..',
      message: 'Usted '+ this.usuario.username + ' ya esta registrado:D',
      buttons: ['OK']
    });
    alerta.present();
  }



}
