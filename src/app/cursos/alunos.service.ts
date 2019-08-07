import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: string []= [];


  constructor() { 
    this.alunos = ['aaaa', 'bbbbb', 'ccccc']
  }

  getAlunos(){
    return this.alunos;
  }
}
