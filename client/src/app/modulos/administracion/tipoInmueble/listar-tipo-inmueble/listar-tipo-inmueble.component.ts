import { Component, OnInit } from '@angular/core';
import { TipoInmueblesModel } from 'src/app/modelos/tipo-inmuebles.model';
import { TipoInmuebleService } from 'src/app/servicios/tipo-inmueble.service';

@Component({
  selector: 'app-listar-tipo-inmueble',
  templateUrl: './listar-tipo-inmueble.component.html',
  styleUrls: ['./listar-tipo-inmueble.component.css'],
})
export class ListarTipoInmuebleComponent implements OnInit {
  listaRegistros: TipoInmueblesModel[] = [];

  constructor(private servicioTipoInmueble: TipoInmuebleService) {}

  ngOnInit(): void {
    this.servicioTipoInmueble.ListarRegistros().subscribe({
      next: (data) => {
        this.listaRegistros = data;
      },
      error: (err) => {
        alert('Error obteniendo la información.');
      },
    });
  }
}
