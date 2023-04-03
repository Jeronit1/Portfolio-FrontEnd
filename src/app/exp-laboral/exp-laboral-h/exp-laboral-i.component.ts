import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exp-laboral-i',
  templateUrl: './exp-laboral-i.component.html',
  styleUrls: ['./exp-laboral-i.component.css']
})
export class ExpLaboralHComponent {
  //Obtengo todos los parametros del componente padre
 @Input() titulo:String="";
 @Input() infoLaboral:String="";
 @Input() imagenLaboral:String="";
 @Input() visible:boolean=false;
}
