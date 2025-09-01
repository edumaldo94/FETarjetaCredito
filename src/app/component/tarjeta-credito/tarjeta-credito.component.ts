import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tarjeta-credito',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.scss']
})
export class TarjetaCreditoComponent implements OnInit {

  listTarjetas: any[] = [
    { titular: 'Eduardo', numero: '1234 5678 9012 3456', fechaExpiracion: '12/24', cvv: '123', tipo: 'Visa' },
    { titular: 'Maria', numero: '9876 5432 1098 7654', fechaExpiracion: '11/23', cvv: '456', tipo: 'MasterCard' },
    { titular: 'Juan', numero: '4567 8901 2345 6789', fechaExpiracion: '10/25', cvv: '789', tipo: 'American Express' }
  ];

  form:FormGroup;

  constructor( private fb: FormBuilder,private toastr: ToastrService) {
    this.form = this.fb.group({
      titular: ['',Validators.required],
      numero: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
  fechaExpiracion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    });
  }

  ngOnInit(): void { }

  agregarTarjeta(){
    console.log(this.form);
  const tarjeta: any = {
    titular: this.form.value.titular,
    numero: this.form.value.numero,
    fechaExpiracion: this.form.value.fechaExpiracion,
    cvv: this.form.value.cvv,

  }
  this.listTarjetas.push(tarjeta);
  this.toastr.success('Tarjeta agregada con exito', 'Tarjeta Agregada', {
    timeOut: 3000,
    positionClass: 'toast-top-right'
  });
  this.form.reset();
};
deletCard(index:number){

this.listTarjetas.splice(index,1);
 this.toastr.error('Tarjeta eliminada con exito', 'Tarjeta Eliminada', {
    timeOut: 3000,
   positionClass: 'toast-top-right'
});
};

}
