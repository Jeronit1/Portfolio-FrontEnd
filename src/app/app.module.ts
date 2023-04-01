
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExpLaboralComponent } from './exp-laboral/exp-laboral.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { FormsModule } from '@angular/forms';
import { SkillsComponent } from './skills/skills.component';
import { SkillPersonaComponent } from './skills/skill-h/skill-persona.component';
import { ExpLaboralHComponent } from './exp-laboral/exp-laboral-h/exp-laboral-i.component';
import { EducacionHComponent } from './educacion/educacion-h/educacion-h.component';

import { PerfilComponent } from './perfil/perfil.component';
import { ProyectoHComponent } from './proyecto/proyecto-h/proyecto-h.component';

const AppRoter:Routes=[
  {path:"", component:HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpLaboralComponent,
    ExpLaboralHComponent,
    EducacionComponent,
    ProyectoComponent,
    SkillsComponent,
    SkillPersonaComponent,
    EducacionHComponent,
    ProyectoHComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoter),
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
