import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { RegistroserviceService, Usuario } from '../../service/registroservice.service';
import { ToastController } from '@ionic/angular';
import { 
  FormGroup, 
  FormControl, 
  Validators, 
  FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})


export class RegistroPage implements OnInit {

  usuarios: Usuario[] =[];
  formularioRegistro : FormGroup;
  newUsuario : Usuario = <Usuario>{};
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  
  constructor(private alertController: AlertController, 
              private menuController: MenuController,
              private toastController: ToastController,
              private registroService: RegistroserviceService,
              private fb:FormBuilder) {
                this.formularioRegistro = this.fb.group({
                  'nombre': new FormControl("", Validators.compose([Validators.required, Validators.minLength(2)])),
                  'correo': new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern(this.emailPattern)]),
                  'password': new FormControl("", Validators.compose([Validators.required, Validators.minLength(2)])),
                  'confirmPass': new FormControl("", Validators.compose([Validators.required, Validators.minLength(2)])),
                  'tipo': new FormControl("",Validators.required),
                },
                {
                  validators:this.Mustmatch('password','confirmPass')
                }
                )
               }


  get f(){
    return this.formularioRegistro.controls;
  }

  Mustmatch(password:any, confirmPass:any){
    return (FormGroup: FormGroup)=>{
      const passwordcontrol=FormGroup.controls[password];
      const confirmPasscontrol=FormGroup.controls[confirmPass];

      if(confirmPasscontrol.errors && !confirmPasscontrol.errors['Mustmatch']){
        return;
      }

      if(passwordcontrol.value!== confirmPasscontrol.value){
        confirmPasscontrol.setErrors({Mustmatch:true});
      }
      else{
        confirmPasscontrol.setErrors(null);

      }

    };
  }

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
      message: '¡Registro de usuario exitoso!',
      buttons: ['OK'],
    });

    await alert.present();
  }



  async CrearUsuario(){
    //console.log('Guardar');
    var form= this.formularioRegistro.value;
    var existe = 0;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos Incompletos',
        message: 'Debe completar todos los datos',
        buttons: ['Aceptar'],
      });

      await alert.present();
      return;
    }
    else{
      this.newUsuario.nomUsuario = form.nombre
      this.newUsuario.correoUsuario = form.correo,
      this.newUsuario.passUsuario = form.password,
      this.newUsuario.repassUsuario = form.confirmPass,
      this.newUsuario.tipo = form.tipo

      this.registroService.getUsuarios().then(datos=>{
        this.usuarios = datos;

        if(!datos || datos.length==0){
          this.registroService.addUsuario(this.newUsuario).then(dato=>{
            this.newUsuario=<Usuario>{};
            this.showToast('Usuario Creado');
          });
          this.formularioRegistro.reset();
        }
        else{
          for (let obj of this.usuarios){
            if(this.newUsuario.correoUsuario == obj.correoUsuario){
              existe = 1;
            }
          }//fin for
          if(existe == 1){
            this.alertCorreoDuplicado();
            this.formularioRegistro.reset();
          }
          else{
            this.registroService.addUsuario(this.newUsuario).then(dato=>{
              this.newUsuario=<Usuario>{};
              this.showToast('Usuario Creado')
            })
          }
        }
      })
    };//else


  }//metodo

  async showToast (msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async alertCorreoDuplicado(){
    const alert = await this.alertController.create({ 
      header: '¡Error!',
      message: 'El correo ingresado ya existe',
      buttons: ['Aceptar']
    })
    await alert.present();
  }


}
