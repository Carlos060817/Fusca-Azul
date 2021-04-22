import { Component, OnInit } from '@angular/core';
import { EstoqueService } from './estoque.service';
import { Estoque } from './listestoque.models';


@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

produtos: Estoque[]

constructor(private estoqueService:EstoqueService){
  this.produtos = estoqueService.getEstoque();
}

  ngOnInit(): void {
  }

  

 
}
