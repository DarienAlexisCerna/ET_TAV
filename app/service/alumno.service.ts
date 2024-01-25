import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { alumno } from '../interface/alumno';

import { alumnos } from '../Interface/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) { }

  listaralumno():Observable<alumno>{
    return this.http.get<alumno>(`${environment.apiURL}/alumno`)
  }

  agregaralumno(newAlumnos: alumnos):Observable<alumnos>{
    return this.http.post<alumnos>(`${environment.apiURL}/alumno`,newAlumnos)
  }
}
