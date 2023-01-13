import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleproductoService } from 'src/app/services/detalleproducto.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

 //SE PONE LOS TIPOS DE DATOS
  // id!:number;
  // codigo!:string;
  // descripcion!:string;
  // precioventa!:number;
  // preciocompra!:number;
  // existencia!:number;
  
  id = "";
  

  constructor(private router:Router, private route:ActivatedRoute,public DetalleServices: DetalleproductoService) { }

  ngOnInit(): void {
    //AQUI SE LOS CAMPOS Y SE ENVIA
    // this.id= Number(this.route.snapshot.paramMap.get('id'));
    // this.codigo= String(this.route.snapshot.paramMap.get('codigo'));
    // this.descripcion= String(this.route.snapshot.paramMap.get('descripcion'));
    // this.precioventa= Number(this.route.snapshot.paramMap.get('precioventa'));
    // this.preciocompra= Number(this.route.snapshot.paramMap.get('preciocompra'));
    // this.existencia= Number(this.route.snapshot.paramMap.get('existencia'));
    
    this.id = String(this.route.snapshot.paramMap.get('id'))
  }
 

  

}
