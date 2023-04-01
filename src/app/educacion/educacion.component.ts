import { Component, Input } from '@angular/core';
import { educacionModel } from '../model/educacion.model';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

  @Input() visible:boolean=false;

educacionLista:educacionModel[]=[
  {titulo:"EEST N°2: ", infoEducacion:"Escuela tecnica en la que me recibi en informatica y pude llegar a donde estoy gracias a ella", imagenEducacion:"./assets/imagen gris.png"},
  {titulo:"Lorem Ipsum:", infoEducacion: "Integer aliquet laoreet turpis id feugiat. Maecenas varius orci quis erat elementum convallis. Etiam blandit lobortis mauris vel condimentum. Nunc laoreet feugiat lectus, at sollicitudin odio gravida vel. Integer elementum aliquam lacus id blandit. Cras bibendum, dui in condimentum luctus, libero sapien blandit nunc, ut porta nibh eros at mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra ultricies mattis. Ut lectus arcu, posuere ac luctus quis, rhoncus non nisi.",imagenEducacion:"./assets/imagen gris.png"}
]
}
