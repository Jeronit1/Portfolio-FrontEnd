import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-educacion-h',
  templateUrl: './educacion-h.component.html',
  styleUrls: ['./educacion-h.component.css']
})
export class EducacionHComponent {
  ////Obtengo todas las variables pasadas del componente padre
  @Input () titulo:String="";
  @Input () infoEducacion:String="";
  @Input () imagenEducacion:String="";
  @Input() visible:boolean=false;

}
