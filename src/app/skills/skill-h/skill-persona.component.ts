import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-persona',
  templateUrl: './skill-persona.component.html',
  styleUrls: ['./skill-persona.component.css']
})
export class SkillPersonaComponent implements OnInit {
  //Recibe las variables de la clase padre
  @Input() progress: number = 0;
  @Input() titulo: String="";
  @Input() visible:boolean=false;
  //funcion para pasarle una variable al css y calcular el progreso
  get progressStyle() {
    return {
      '--progress': `${this.progress}%`
    };
  }

  constructor() { }

  ngOnInit(): void {
  }

}
