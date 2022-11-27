import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InmueblesModel } from 'src/app/modelos/inmuebles.model';
import { TipoInmueblesModel } from 'src/app/modelos/tipo-inmuebles.model';
import { InmuebleService } from 'src/app/servicios/inmueble.service';
import { TipoInmuebleService } from 'src/app/servicios/tipo-inmueble.service';

@Component({
  selector: 'app-editar-inmueble',
  templateUrl: './editar-inmueble.component.html',
  styleUrls: ['./editar-inmueble.component.css'],
})
export class EditarInmuebleComponent implements OnInit {
  opcionesTipoInmueble: TipoInmueblesModel[] = [];
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioInmueble: InmuebleService,
    private router: Router,
    private servicioTipoInmueble: TipoInmuebleService,
    private route: ActivatedRoute
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
    this.BuscarRegistro();
  }

  /**
   * Busca un registro a editar
   */
  BuscarRegistro() {
    let id = this.route.snapshot.params['id'];
    this.servicioInmueble.BuscaRegistroPorId(id).subscribe({
      next: (data) => {
        this.fGroup.controls['id'].setValue(data._id);
        this.fGroup.controls['propietario'].setValue(data.propietario);
        this.fGroup.controls['direccion'].setValue(data.direccion);
        this.fGroup.controls['telefono'].setValue(data.telefono);
        this.fGroup.controls['tipoId'].setValue(data.tipoInmuebleId);
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
      propietario: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      tipoId: ['', [Validators.required]],
    });
  }

  /**
   * Guarda un nuevo registro
   */
  EditarRegistro() {
    if (this.fGroup.invalid) {
      alert('Faltan datos');
    } else {
      let id = this.fGroup.controls['id'].value;
      let propietario = this.fGroup.controls['propietario'].value;
      let telefono = this.fGroup.controls['telefono'].value;
      let direccion = this.fGroup.controls['direccion'].value;
      let tipoInmuebleId = this.fGroup.controls['tipoId'].value;
      let modelo = new InmueblesModel();
      modelo.direccion = direccion;
      modelo.propietario = propietario;
      modelo.telefono = telefono;
      modelo.tipoInmuebleId = tipoInmuebleId;
      modelo._id = id;
      this.servicioInmueble.EditarRegistro(modelo).subscribe({
        next: (data) => {
          this.router.navigate(['/admin/listar-inmueble']);
          alert('Editado correctamente.');
        },
        error: (err) => {
          alert('Error editando la información.');
        },
      });
    }
  }
}
