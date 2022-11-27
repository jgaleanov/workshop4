import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoInmuebleService } from 'src/app/servicios/tipo-inmueble.service';

@Component({
  selector: 'app-eliminar-tipo-inmueble',
  templateUrl: './eliminar-tipo-inmueble.component.html',
  styleUrls: ['./eliminar-tipo-inmueble.component.css'],
})
export class EliminarTipoInmuebleComponent implements OnInit {
  nombre: string = '';
  idPorEliminar: string = '';

  constructor(
    private servicioTipoInmueble: TipoInmuebleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.BuscarRegistro();
  }

  /**
   * Busca un registro por id
   */
  BuscarRegistro() {
    this.idPorEliminar = this.route.snapshot.params['id'];
    this.servicioTipoInmueble.BuscaRegistroPorId(this.idPorEliminar).subscribe({
      next: (data) => {
        this.nombre = data.nombre;
      },
      error: (err) => {
        alert('Error buscando la información.');
      },
    });
  }

  /**
   * Edita un registro
   */
  EliminarRegistro() {
    this.servicioTipoInmueble.EliminarRegistro(this.idPorEliminar).subscribe({
      next: (data) => {
        this.router.navigate(['/admin/listar-tipo-inmueble']);
        alert('Eliminado correctamente.');
      },
      error: (err) => {
        alert('Error editando la información.');
      },
    });
  }
}
