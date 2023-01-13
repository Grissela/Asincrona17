import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleproductoService } from 'src/app/services/detalleproducto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  // id="Hola";
  // codigo="";
  // descripcion="";
  // precioventa!:number;
  // preciocompra!:number;
  // existencia!:number;

  array: any[] = []
  constructor(private router:Router, private route:ActivatedRoute,public DetalleServices: DetalleproductoService) { }
 

  ngOnInit(): void {
    //AQUI SE INICIALIZA EL PARAMETRO Y SE ENVIA CON EL METODO GET PARA QUE SE MUESTRE EN EL URL
    // this.id = String(this.route.snapshot.paramMap.get('id'));
    // this.codigo = String(this.route.snapshot.paramMap.get('codigo'));
    // this.descripcion = String(this.route.snapshot.paramMap.get('descripcion'));
    // this.precioventa = Number(this.route.snapshot.paramMap.get('precioventa'));
    // this.preciocompra = Number(this.route.snapshot.paramMap.get('preciocompra'));
    // this.existencia = Number(this.route.snapshot.paramMap.get('existencia'));
  }

  //2 MANERA ES INVOCANDO POR PARAMETROS DENTRO DE LA FUNCION
  // editar(id:string | number, codigo:string | number,descripcion:string| number, precioventa:string| number, preciocompra:string| number,existencia:string| number){
    
  //   this.router.navigate(['/detalle',id,codigo,descripcion,precioventa,preciocompra,existencia])
    
  // }

  //OTRA FORMA ES SOLO INVOCANDO MEDIANTE EL PARAMETRO ID
  editar(id: string) {
    this.router.navigate(['/detalle', id])
  }

}
