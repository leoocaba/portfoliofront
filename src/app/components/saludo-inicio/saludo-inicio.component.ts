import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-saludo-inicio',
  templateUrl: './saludo-inicio.component.html',
  styleUrls: ['./saludo-inicio.component.css']
})
export class SaludoInicioComponent implements OnInit {

  usuario: Persona = new Persona("", "", "");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    // El subscribe escucha los cambios del observable, ejecuta un código y provoca una respuesta
    this.personaService.getPersona().subscribe(data => {
      this.usuario = data
    });
  }

}
