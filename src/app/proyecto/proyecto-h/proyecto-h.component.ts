import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proyecto-h',
  templateUrl: './proyecto-h.component.html',
  styleUrls: ['./proyecto-h.component.css']
})
export class ProyectoHComponent {
  ///Obtengo las variables pasadas del componente padre
 @Input() titulo:String="";
 @Input() descripcion:String="";
 @Input() imagenes:String[]=[];
 @Input() fecha:String="";
 @Input() visible:boolean=false;
}
