import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { ListarTipoInmuebleComponent } from './tipoInmueble/listar-tipo-inmueble/listar-tipo-inmueble.component';
import { CrearTipoInmuebleComponent } from './tipoInmueble/crear-tipo-inmueble/crear-tipo-inmueble.component';
import { EditarTipoInmuebleComponent } from './tipoInmueble/editar-tipo-inmueble/editar-tipo-inmueble.component';
import { EliminarTipoInmuebleComponent } from './tipoInmueble/eliminar-tipo-inmueble/eliminar-tipo-inmueble.component';
import { ListarInmuebleComponent } from './inmueble/listar-inmueble/listar-inmueble.component';
import { CrearInmuebleComponent } from './inmueble/crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './inmueble/editar-inmueble/editar-inmueble.component';
import { EliminarInmuebleComponent } from './inmueble/eliminar-inmueble/eliminar-inmueble.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    ListarTipoInmuebleComponent,
    CrearTipoInmuebleComponent,
    EditarTipoInmuebleComponent,
    EliminarTipoInmuebleComponent,
    ListarInmuebleComponent,
    CrearInmuebleComponent,
    EditarInmuebleComponent,
    EliminarInmuebleComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
