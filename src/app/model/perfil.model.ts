export class perfilModel{

    constructor(nombre:String, apellido:String, edad:number, informacion:String, fotoPerfil:String, fotoBanner:String){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.informacion=informacion;
        this.fotoPerfil=fotoPerfil;
        this.fotoBanner=fotoBanner;
    }

    nombre:String="";
    apellido:String="";
    edad:number=0;
    informacion:String="";
    fotoPerfil:String="";
    fotoBanner:String="";
}