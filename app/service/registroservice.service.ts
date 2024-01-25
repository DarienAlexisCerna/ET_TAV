import { Injectable } from '@angular/core';
import { Storage} from '@ionic/storage';


export interface Usuario{
  nomUsuario:string;
  correoUsuario:string;
  passUsuario:string;
  repassUsuario:string;
  tipo: string;
}

const USERS_KEY ='my-usuarios';



@Injectable({
  providedIn: 'root'
})
export class RegistroserviceService {
  private _storage: Storage
  newUsuario: Usuario =<Usuario>{};

  constructor(private storage: Storage) {
    this.init();
   }

   //creamos el almacen de usuarios
   async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }


  //creamos un nuevo usuario
  async addUsuario(dato: Usuario):Promise<any>{
    return this.storage.get(USERS_KEY).then((datos: Usuario[])=>{ 
      if(datos){
        datos.push(dato);
        return this.storage.set(USERS_KEY, datos);
      }
      else{
        return this.storage.set(USERS_KEY, [dato]);
      }
    })
  }//findelmetodo

  //metodo que devuelve los objetos del storage
  async getUsuarios():Promise<Usuario[]>{
    return this.storage.get(USERS_KEY);
  }


}
