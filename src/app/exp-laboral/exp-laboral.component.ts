import { Component, Input } from '@angular/core';
import { expLaboralModel } from '../model/expLaboral.model';

@Component({
  selector: 'app-exp-laboral',
  templateUrl: './exp-laboral.component.html',
  styleUrls: ['./exp-laboral.component.css']
})
export class ExpLaboralComponent {

  @Input() visible:boolean=false;

expLaboral:expLaboralModel[]=[
  {titulo:"Delphos technology: ", infoLaboral:"Local que se dedica a arreglar computadoras, camaras de fotos, entre otras muchas cosas",imagenLaboral:"./assets/imagen gris.png"},
  {titulo:"Lorem Ipsum: ", infoLaboral:"Integer aliquet laoreet turpis id feugiat. Maecenas varius orci quis erat elementum convallis. Etiam blandit lobortis mauris vel condimentum. Nunc laoreet feugiat lectus, at sollicitudin odio gravida vel. Integer elementum aliquam lacus id blandit. Cras bibendum, dui in condimentum luctus, libero sapien blandit nunc, ut porta nibh eros at mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra ultricies mattis. Ut lectus arcu, posuere ac luctus quis, rhoncus non nisi.",imagenLaboral:"./assets/imagen gris.png"}
]

}
