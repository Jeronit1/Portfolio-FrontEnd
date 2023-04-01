import { Component, Input } from '@angular/core';
import { perfilModel } from '../model/perfil.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  @Input() visible:boolean=false;

Perfil:perfilModel={nombre:"Jeronimo",
apellido:"Pourtau Fleismacher", 
edad:19, 
informacion:"Termine la secuendaria, actualmente estudiando en la universidad la carrera de ingenieria en sistemas los titulos que tengo son: Certificado de experto en Social & Community manager, Máster en Marketing Digital y Analítica Web", 
fotoPerfil:"/assets/Decenfoque tec.jpg", 
fotoBanner:"/assets/devops.jpg"
};

}
