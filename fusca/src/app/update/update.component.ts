import { Component, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UpdateService } from '../update/update.service';
import { EstoqueService } from '../estoque/estoque.service';
import { Estoque } from '../update/update.models';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  index: number = 0;
  produtos: Estoque[] = [];
  quantidade: number = 0;


  constructor(private updateService:UpdateService, private route:ActivatedRoute, public estoqueService:EstoqueService){
    this.index = this.route.snapshot.params.id;
    this.produtos[0] = estoqueService.getItemEstoque(this.index);
  }

  ngOnInit(): void {

  }

  onSubmit(from:any){

  }

  adicionar(): void{
    this.estoqueService.adicionarQuantidade(this.index, this.quantidade);
  }

  remover(): void{
    this.estoqueService.removerQuantidade(this.index, this.quantidade);
  }

}
