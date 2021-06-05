import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClientes } from '../interfaces/icliente';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient ) { }

  private url:string = 'http://localhost:8080/api/v1';

  getClientes(): Observable<IClientes[]>
  {
    return this.http.get( `${this.url}/clientes/buscar` )
      .pipe( map( response => response as IClientes[] ) );
  }
}
