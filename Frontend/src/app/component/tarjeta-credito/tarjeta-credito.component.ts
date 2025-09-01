import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Tarjeta, TarjetaService } from '../../services/tarjeta.service';

@Component({
  selector: 'app-tarjeta-credito',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    ToastrModule // <- IMPORTANTE para Toastr
  ],
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.scss']
})
export class TarjetaCreditoComponent implements OnInit {

  listTarjetas: Tarjeta[] = [];
  accion = 'Agregar';
  form: FormGroup;
  id: number | undefined;
  constructor(private fb: FormBuilder, private toastr: ToastrService, private _tarjetaService: TarjetaService) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    });
  }

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    try {
      this._tarjetaService.getListCards().subscribe((data: any) => {
        console.log(data);
        this.listTarjetas = data;
      }, error => {
        console.log(error);
      })
    } catch (error) {

    }
  };
  addCard() {
    console.log(this.form);
    const tarjeta: Tarjeta = {
      id: this.id,
      titular: this.form.value.titular,          // -> Titular (PascalCase)
      numeroTarjeta: this.form.value.numeroTarjeta,            // -> Numero (PascalCase)
      fechaExpiracion: this.form.value.fechaExpiracion, // -> FechaExpiracion
      cvv: this.form.value.cvv

    }
    //this.listTarjetas.push(tarjeta);
    if (this.id === undefined) {
      this._tarjetaService.saveCard(tarjeta).subscribe(data => {
        this.toastr.success('Tarjeta agregada con exito', 'Tarjeta Agregada', {
          timeOut: 3000,
          positionClass: 'toast-top-right'
        });
        this.getCards();
        this.form.reset();
      }, error => {
        this.toastr.error('Opss... Ocurrio un error', 'Error');
        console.log(error);
      })
    } else {
      console.log("id :::: " + this.id);
      tarjeta.id = this.id;
      console.log("tarjeta :::: " + tarjeta.id);
      this._tarjetaService.updateCard(this.id, tarjeta).subscribe(data => {
        this.form.reset();
        this.accion = 'Agregar';
        this.id = undefined;
        this.toastr.info('Tarjeta actualizada con exito', 'Tarjeta Actualizada', {
          timeOut: 3000,
          positionClass: 'toast-top-right'
        });
        this.getCards();
      }, error => {
        this.toastr.error('update... Ocurrio un error', 'Error');
        console.log(error);
      })
    }

  };

  deleteCard(id: number) {
    try {
      this._tarjetaService.deleteCard(id).subscribe(data => {
        this.toastr.error('Tarjeta eliminada con exito', 'Tarjeta Eliminada', {
          timeOut: 3000,
          positionClass: 'toast-top-right'
        });
        this.getCards();
      }, error => {
        console.log(error);
      })
    } catch (error) {
      console.log(error);
    }
  };
  updateCard(tarjeta: any) {
    console.log(tarjeta.numeroTarjeta);
    this.accion = 'Editar';
    this.id = tarjeta.id;
    this.form.patchValue({
      titular: tarjeta.titular,
      numeroTarjeta: tarjeta.numeroTarjeta,
      fechaExpiracion: tarjeta.fechaExpiracion,
      cvv: tarjeta.cvv
    });
  }

};
/*
deletCard(index:number){

this.listTarjetas.splice(index,1);
 this.toastr.error('Tarjeta eliminada con exito', 'Tarjeta Eliminada', {
    timeOut: 3000,
   positionClass: 'toast-top-right'
});
};*/


