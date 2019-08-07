import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos/cursos.component';
import { AlunosComponent } from './alunos/alunos.component';

@NgModule({
  declarations: [CursosComponent, AlunosComponent],
  imports: [
    CommonModule
  ],
  exports: [CursosComponent, AlunosComponent]
})
export class CursosModule { }
