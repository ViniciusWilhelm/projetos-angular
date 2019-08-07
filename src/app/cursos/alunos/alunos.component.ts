import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
  providers: [AlunosService],
})
export class AlunosComponent implements OnInit {

  alunos: string [] = [];
  
  private service: AlunosService;

  constructor(private alunoService: AlunosService) {}

  ngOnInit() {
    this.alunos = this.alunoService.getAlunos();
  }

}
