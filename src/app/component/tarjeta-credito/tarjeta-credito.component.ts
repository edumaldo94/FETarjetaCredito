import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta-credito',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.scss'] 
})
export class TarjetaCreditoComponent  {

  listTarjetas: any[] = [ 
    { titular: 'Eduardo', numero: '1234 5678 9012 3456', fechaExpiracion: '12/24', cvv: '123', tipo: 'Visa' },
    { titular: 'Maria', numero: '9876 5432 1098 7654', fechaExpiracion: '11/23', cvv: '456', tipo: 'MasterCard' },
    { titular: 'Juan', numero: '4567 8901 2345 6789', fechaExpiracion: '10/25', cvv: '789', tipo: 'American Express' }
  ];

  constructor() { }

  ngOnInit(): void { } 
}
