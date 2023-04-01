import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-persona',
  templateUrl: './skill-persona.component.html',
  styleUrls: ['./skill-persona.component.css']
})
export class SkillPersonaComponent implements OnInit {
  @Input() progress: number = 0;
  @Input() titulo: String="";
  @Input() visible:boolean=false;
  get progressStyle() {
    return {
      '--progress': `${this.progress}%`
    };
  }

  constructor() { }

  ngOnInit(): void {
  }

  skill:String="HTML";
}
