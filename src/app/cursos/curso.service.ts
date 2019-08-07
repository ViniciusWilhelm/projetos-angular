import { Injectable } from '@angular/core';

@Injectable()
export class CursoService {

  private paraExibicao: string []= [];


  constructor() { 
    this.paraExibicao = ['tecnico em Informatica', 'Tecnico em Redes', 'Superior em Analise e Desenvolvimento']
  }

  getCursos(){
    return this.paraExibicao;
  }
}
