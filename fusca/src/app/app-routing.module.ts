import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstoqueComponent } from './estoque/estoque.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"estoque", component : EstoqueComponent},
  {path:"update", component : UpdateComponent},
  {path:"update-produto/:id", component : UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
