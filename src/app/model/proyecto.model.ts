export class proyectoModel{

constructor(titulo:String, descripcion:String, imagenesProyecto:String[], fechaRealizacion:String){
    this.titulo=titulo
    this.descripcion=descripcion;
    this.imagenesProyecto=imagenesProyecto;
    this.fechaRealizacion=fechaRealizacion;
}

    titulo:String="";
    descripcion:String="";
    imagenesProyecto:String[]=[];
    fechaRealizacion:String="";
}