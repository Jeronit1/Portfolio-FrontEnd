
import { Component, Input, OnInit } from '@angular/core';
import { SkillModel } from '../model/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  @Input() visible:boolean=false;

  ngOnInit(): void {
  }

  constructor(){}
  Skills:SkillModel[]=[
    {titulo:"HTML", porcentaje:50},
    {titulo:"CSS", porcentaje:80},
    {titulo:"JavaScript", porcentaje:20},
    {titulo:"SpringBoot", porcentaje:95}
  ]
}