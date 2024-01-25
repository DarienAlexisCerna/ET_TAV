import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiService } from 'src/app/servicios/api.service';
import { Article } from '../interfaces/interfaces';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  articulos :Article[] =[];

  constructor(private menuController: MenuController,
              private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTopHeadLines().subscribe(resp =>{
      console.log(resp);
      this.articulos.push(...resp.articles);      //agrega objetos de la api al arreglo de articulos
    })
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
}
