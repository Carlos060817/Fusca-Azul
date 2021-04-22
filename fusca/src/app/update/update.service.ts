import { Injectable } from '@angular/core';
import { Estoque } from '../estoque/listestoque.models';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private produtos: Estoque[]

  constructor() {
    this.produtos = [
      new Estoque(1,"4885", "Peça 12",12,200,50),
    ]
   }

    getEstoque(){
      return this.produtos
    }
}
