import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
///variable para ver los botones de edicion/////
private visibleEdit:boolean=true;

  ///getters
getVisible(){
  return this.visibleEdit;
}

setVisible(value:boolean){
  this.visibleEdit=value;
}
}
