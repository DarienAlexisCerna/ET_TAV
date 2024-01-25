import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IregistrarP, Users } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  //obtenemos un observable con todos los usuarios almacenados
  GetAllUsers():Observable<Users>{
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios`);
  }

  //obtenemos un observable con la información que se busca a través de username
  GetUserById(codigo: any):Observable<Users>{
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios/?username=${codigo}`);
  }

  //retorna el nombre de usuario que nos permite controlar guard
  IsLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }

  GetUserrole(){
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
  }

  CrearUsuario(newUsuario:IregistrarP): Observable<IregistrarP>{
    return this.httpClient.post<IregistrarP>(`${environment.apiUrl}/usuarios`, newUsuario);
  }
  

  BuscarUsuarioId(id:number):Observable<IregistrarP>{
    return this.httpClient.get<IregistrarP>(`${environment.apiUrl}/usuarios/?id=${id}`);
  }

  ActualizarUsuario(usuario:any):Observable<Users>{
    return this.httpClient.put<Users>(`${environment.apiUrl}/usuarios/${usuario.id}`, usuario);
  }

}
