import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoInmuebleService } from 'src/app/servicios/tipo-inmueble.service';

@Component({
  selector: 'app-editar-tipo-inmueble',
  templateUrl: './editar-tipo-inmueble.component.html',
  styleUrls: ['./editar-tipo-inmueble.component.css'],
})
export class EditarTipoInmuebleComponent implements OnInit {
  fGroup: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private servicioTipoInmueble: TipoInmuebleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ConstruirFormulario();
    this.BuscarRegistro();
  }

  /**
   * Busca registro por id
   */
  BuscarRegistro() {
    let id = this.route.snapshot.params['id'];
    this.servicioTipoInmueble.BuscaRegistroPorId(id).subscribe({
      next: (data) => {
        this.fGroup.controls['id'].setValue(data._id);
        this.fGroup.controls['nombre'].setValue(data.nombre);
      },
      error: (err) => {
        alert('Error buscando la información.');
      },
    });
  }

  /**
   * Construye el formulario
   */
  ConstruirFormulario() {
    this.fGroup = this.fb.group({
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
    });
  }

  /**
   * Edita un registro
   */
  EditarRegistro() {
    if (this.fGroup.invalid) {
      alert('Faltan datos');
    } else {
      let nombre = this.fGroup.controls['nombre'].value;
      let id = this.fGroup.controls['id'].value;
      this.servicioTipoInmueble.EditarRegistro(id, nombre).subscribe({
        next: (data) => {
          this.router.navigate(['/admin/listar-tipo-inmueble']);
          alert('Modificado correctamente.');
        },
        error: (err) => {
          alert('Error editando la información.');
        },
      });
    }
  }
}
