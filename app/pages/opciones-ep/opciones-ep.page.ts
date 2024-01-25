import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-opciones-ep',
  templateUrl: './opciones-ep.page.html',
  styleUrls: ['./opciones-ep.page.scss'],
})
export class OpcionesEPPage implements OnInit {

  constructor(private menuController: MenuController, private router: Router) { }

  ngOnInit() {
  }

  redirectRegistro() {

    this.router.navigate(['/registro']);
 
  }

  redirectprofesor() {

    this.router.navigate(['/profesor']);
 
  }
}
