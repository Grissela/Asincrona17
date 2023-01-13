import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetalleproductoService {
  array:any[] = [
    [1, 'Galleta chokis', 10.00, 15.00, 5, 100.00],
    [2, 'Mermelada Fresa', 65.00, 80.00, 15, 100.00],
    [3, 'Aceite', 18.00, 20.00, 2, 100.00],
    [4, 'Palomita de Maiz', 12.00, 15.00, 3, 100.00],
    [5, 'Doritos', 5.00, 8.00, 3, 100.00]
  ]
  constructor() { }
}
