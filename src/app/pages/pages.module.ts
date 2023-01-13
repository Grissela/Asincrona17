import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';
import { RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ],
  exports: [
    HomeComponent,
    DetalleComponent
  ],
})
export class PagesModule { }
