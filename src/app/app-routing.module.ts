import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent,
  // children:[
  //   {path:'detalle/:id', component:DetalleComponent}
  // ]
},
{path:'detalle/:id',component:DetalleComponent},
//AQUI SE COLOCA POR PARAMETROS CADA CAMPO
// {path:'detalle/:id/:codigo/:descripcion/:precioventa/:preciocompra/:existencia', component:DetalleComponent},
{path:'', redirectTo:'', pathMatch:'full'},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
