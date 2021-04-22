import { Injectable } from '@angular/core';
import { Estoque } from './listestoque.models';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  private produtos: Estoque[]

  constructor() {
    this.produtos = [
      new Estoque(1,"4885", "Peça 12",12,200,50),
      new Estoque(2,"0568", "Peça 1",56,110,60),
      new Estoque(3,"6524", "Peça 3",20,80,25),
      new Estoque(4,"8454", "Peça 77",20,80,10),
      new Estoque(5,"1312", "Peça 79",13,20,5),
      new Estoque(6,"4574", "Peça 75",16,45,5),
      new Estoque(7,"1348", "Peça 31",80,100,20),
      new Estoque(8,"9658", "Peça 66",50,50,10),
    ]
    for(var i=0; i<this.produtos.length; i++){
      this.validacaoEstoque(i);
    }
   }

    getEstoque(){
      return this.produtos
    }

    getItemEstoque(i:number){
      return this.produtos[i]
    }

    adicionarQuantidade(i:number, quantidade_inserida:number){
      this.produtos[i].qtde_disponivel = this.produtos[i].qtde_disponivel + quantidade_inserida;
      this.validacaoEstoque(i);
    }

    removerQuantidade(i:number, quantidade_inserida:number){
      this.produtos[i].qtde_disponivel = this.produtos[i].qtde_disponivel - quantidade_inserida;
      this.validacaoEstoque(i);
    }

    validacaoEstoque(i:number){
      console.log( ((this.produtos[i].qtde_disponivel/100) * this.produtos[i].c_max) );
      if(this.produtos[i].qtde_disponivel < this.produtos[i].qtde_min){
        this.produtos[i].type_alert = 'abaixo_min';
      }else if( this.produtos[i].qtde_disponivel < ((this.produtos[i].c_max * 70) / 100)){
        this.produtos[i].type_alert = 'abaixo_capacidade_max';
      }else{
        this.produtos[i].type_alert = '';
      }
    }

}
