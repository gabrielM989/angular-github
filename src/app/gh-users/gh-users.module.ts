import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { GhHomeComponent } from './components/gh-home/gh-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GhDialogComponent } from './components/gh-dialog/gh-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { GhApiService } from './services/gh-api.service';



@NgModule({ /* NgModule é o decorator, para dizer que é um módulo */
  declarations: [
    GhHomeComponent,
    GhDialogComponent
  ], /* vamos colocar decorators. diretivas e Pipes */
  imports: [/* Dentro de imports, colocamos apenas os módulos */
    CommonModule, /* É o módulo que o Angular tem as suas bases */
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule /* Para fazer as aquisições em nossa estrutura Angula */
  ],
  exports: [
    GhHomeComponent
  ],
  providers: [ /* para as requisições HTTP */
    GhApiService
  ]
})
export class GhUsersModule { }
