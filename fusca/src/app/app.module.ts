import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EstoqueComponent } from './estoque/estoque.component';
import { UpdateComponent } from './update/update.component';
import { EstoqueService } from './estoque/estoque.service';
import { UpdateService } from './update/update.service';

@NgModule({
  declarations: [
    AppComponent,
    EstoqueComponent,
    UpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    EstoqueService,
    UpdateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
