import { Component, Input } from '@angular/core';
import { proyectoModel } from '../model/proyecto.model';
@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
  //Obtengo la variable para mostrar los botones de edicion
  @Input() visible:boolean=false;

  listaProyectos:proyectoModel[]=[
    {titulo:"Ganesha: ",
     descripcion:"Ganesha es un complemento para bastones guia el cual va a ayudar a la persona con discapacidad visual a detectar los obstaculos que le vienen de la cintura para arriba atravez de vibraciones en el baston, tambien tiene un boton de emergencia en caso de accidente.\n Actualmente participando en un concurso de proyectos para persona con discapacidad HAKATON",
     imagenesProyecto:[    "/assets/complemento.jpg",
                           "/assets/devops.jpg"
      ],
      fechaRealizacion:"28/08/2022"
    },
    {titulo:"Lorem Ipsum: ",
    descripcion:"Integer aliquet laoreet turpis id feugiat. Maecenas varius orci quis erat elementum convallis. Etiam blandit lobortis mauris vel condimentum. Nunc laoreet feugiat lectus, at sollicitudin odio gravida vel. Integer elementum aliquam lacus id blandit. Cras bibendum, dui in condimentum luctus, libero sapien blandit nunc, ut porta nibh eros at mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra ultricies mattis. Ut lectus arcu, posuere ac luctus quis, rhoncus non nisi.",
    imagenesProyecto:[],
     fechaRealizacion:"01/04/2023"}
  ]
}
