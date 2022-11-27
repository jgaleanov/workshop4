import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InmueblesModel } from '../modelos/inmuebles.model';

@Injectable({
  providedIn: 'root',
})
export class InmuebleService {
  url: string = 'http://localhost:3000/inmuebles';

  constructor(private http: HttpClient) {}

  /**
   * Lista los registros de la base de datos
   * @returns arreglo con los objetos de los registros
   */
  ListarRegistros(): Observable<InmueblesModel[]> {
    return this.http.get<InmueblesModel[]>(this.url);
  }

  /**
   * Busca un registro por Id
   * @param id id del registro a buscar
   * @returns el registro del id ingresado
   */
  BuscaRegistroPorId(id: string): Observable<InmueblesModel> {
    return this.http.get<InmueblesModel>(this.url + '/' + id);
  }

  /**
   * Almacena un nuevo registro
   * @param nombre propiedad del registro
   * @returns registro creado
   */
  GuardarRegistro(registro: InmueblesModel): Observable<InmueblesModel> {
    return this.http.post<InmueblesModel>(this.url, {
      propietario: registro.propietario,
      direccion: registro.direccion,
      telefono: registro.telefono,
      tipoInmuebleId: registro.tipoInmuebleId,
    });
  }

  /**
   * Edita un registro
   * @param id id del registro
   * @param nombre nuevo nombre
   * @returns Observable vacío
   */
  EditarRegistro(registro: InmueblesModel): Observable<any> {
    return this.http.put<any>(this.url + '/' + registro._id, {
      propietario: registro.propietario,
      direccion: registro.direccion,
      telefono: registro.telefono,
      tipoInmuebleId: registro.tipoInmuebleId,
    });
  }

  /**
   * ELimina un registro de la base de datos
   * @param id id del registro a eliminar
   * @returns NA
   */
  EliminarRegistro(id: string): Observable<any> {
    return this.http.delete<any>(this.url + '/' + id);
  }
}
