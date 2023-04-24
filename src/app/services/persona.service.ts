import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URI = 'http://localhost:8080/personas/';

  constructor(private http: HttpClient) { }

  // El Observable se utiliza para realizar peticiones asíncronas.
  public getPersona(): Observable<Persona> {
    return this.http.get<Persona>(`${this.URI}traer/`);
  }
}
