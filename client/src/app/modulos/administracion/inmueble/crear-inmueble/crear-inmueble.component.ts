import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InmueblesModel } from 'src/app/modelos/inmuebles.model';
import { TipoInmueblesModel } from 'src/app/modelos/tipo-inmuebles.model';
import { InmuebleService } from 'src/app/servicios/inmueble.service';
import { TipoInmuebleService } from 'src/app/servicios/tipo-inmueble.service';

@Component({
  selector: 'app-crear-inmueble',
  templateUrl: './crear-inmueble.component.html',
  styleUrls: ['./crear-inmueble.component.css'],
})
export class CrearInmuebleComponent implements OnInit {
  opcionesTipoInmueble: TipoInmueblesModel[] = [];
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioInmueble: InmuebleService,
    private router: Router,
    private servicioTipoInmueble: TipoInmuebleService
  ) {}

  ngOnInit(): void {
    this.ConstruirFormulario();
    this.servicioTipoInmueble.ListarRegistros().subscribe({
      next: (data) => {
        this.opcionesTipoInmueble = data;
      },
      error: (err) => {
        alert('Error cargando la información.');
      },
    });
  }

  /**
   * Construye el formulario
   */
  ConstruirFormulario() {
    this.fGroup = this.fb.group({
      propietario: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      tipoId: ['', [Validators.required]],
    });
  }

  /**
   * Guarda un nuevo registro
   */
  GuardarRegistro() {
    if (this.fGroup.invalid) {
      alert('Faltan datos');
    } else {
      let propietario = this.fGroup.controls['propietario'].value;
      let telefono = this.fGroup.controls['telefono'].value;
      let direccion = this.fGroup.controls['direccion'].value;
      let tipoInmuebleId = this.fGroup.controls['tipoId'].value;
      let modelo = new InmueblesModel();
      modelo.direccion = direccion;
      modelo.propietario = propietario;
      modelo.telefono = telefono;
      modelo.tipoInmuebleId = tipoInmuebleId;
      this.servicioInmueble.GuardarRegistro(modelo).subscribe({
        next: (data) => {
          this.router.navigate(['/admin/listar-inmueble']);
          alert('Almacenado correctamente.');
        },
        error: (err) => {
          alert('Error almacenando la información.');
        },
      });
    }
  }
}
