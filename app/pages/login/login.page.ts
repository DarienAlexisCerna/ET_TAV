import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userdata:any;

  usuarios={
    id:0,
    username:"",
    password:"",
    role:"",
    isactive: true
  }

  loginForm :FormGroup;

  constructor(private authservice: AuthService,
    private router: Router,
    private alertController: AlertController, 
    private toastController: ToastController, 
    private builder: FormBuilder){
    this.loginForm = this.builder.group({
      'username': new FormControl("", [Validators.required, Validators.minLength(4)]),
      'password': new FormControl("", [Validators.required, Validators.minLength(4)])
    })
  } 

  ngOnInit() {
  }

  login(){
    if (this.loginForm.valid){
      this.authservice.GetUserById(this.loginForm.value.username).subscribe(resp=>{ 
        this.userdata=resp;
        console.log(this.userdata);
        if (this.userdata.length>0){    //si cumple la condición el objeto trae datos
          this.usuarios={                //userdata llega en formato de arreglo
            id : this.userdata[0].id,
            username: this.userdata[0].username,
            password: this.userdata[0].password,
            role: this.userdata[0].role,
            isactive: this.userdata[0].isactive
          }
          if (this.usuarios.password===this.loginForm.value.password){
            if (this.usuarios.isactive){
              //iniciamos sesión del usuarios 
              sessionStorage.setItem('username', this.usuarios.username);
              sessionStorage.setItem('userrole', this.usuarios.role);
              sessionStorage.setItem('ingresado', 'true');
              //invocamos una alerta utilizando Toast
              this.showToast('Sesión Iniciada');
              this.router.navigateByUrl("/inicio");
            }
            else {
            this.UserInactivo();
            this.loginForm.reset();
            }
             
          }
          else {
            this.Error();
            this.loginForm.reset();
            }
        }
        else{
          this.loginForm.reset();
          this.NoExiste();

        }

      })

    }

  }//login
  async showToast(msg: any){
    const toast= await this.toastController.create({
      message:msg,
      duration: 3000
    })
    toast.present();
  }

  async UserInactivo(){
    const alerta= await this.toastController.create({
      header: "usuarios inactivo",
      message:"Debe contactarse con admin@admin.cl",
      buttons: ['ok']
    })
    await alerta.present();
    return;
  }
  async Error(){
    const alerta= await this.toastController.create({
      header: "Error...",
      message:"Revise sus credenciales",
      buttons: ['ok']
    })
    await alerta.present();
    return;
  }
  async NoExiste(){
    const alerta= await this.toastController.create({
      header: "Error...",
      message:"Este usuarios no existe ",
      buttons: ['ok']
    })
    await alerta.present();
    return;
  }

  redirectRecuperar() {
 
    this.router.navigate(['/recuperar']);
 
  }
  }

