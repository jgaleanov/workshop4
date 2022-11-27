import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoInmuebleService } from 'src/app/servicios/tipo-inmueble.service';

@Component({
  selector: 'app-crear-tipo-inmueble',
  templateUrl: './crear-tipo-inmueble.component.html',
  styleUrls: ['./crear-tipo-inmueble.component.css'],
})
export class CrearTipoInmuebleComponent implements OnInit {
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioTipoInmueble: TipoInmuebleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.ConstruirFormulario();
  }

  /**
   * Construye el formulario
   */
  ConstruirFormulario() {
    this.fGroup = this.fb.group({
      nombre: ['', [Validators.required]],
    });
  }

  /**
   * Guarda un nuevo registro
   */
  GuardarRegistro() {
    if (this.fGroup.invalid) {
      alert('Faltan datos');
    } else {
      let nombre = this.fGroup.controls['nombre'].value;
      this.servicioTipoInmueble.GuardarRegistro(nombre).subscribe({
        next: (data) => {
          this.router.navigate(['/admin/listar-tipo-inmueble']);
          alert('Almacenado correctamente.');
        },
        error: (err) => {
          alert('Error almacenando la información.');
        },
      });
    }
  }
}
