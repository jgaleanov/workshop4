import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTipoInmuebleComponent } from './tipoInmueble/listar-tipo-inmueble/listar-tipo-inmueble.component';
import { CrearTipoInmuebleComponent } from './tipoInmueble/crear-tipo-inmueble/crear-tipo-inmueble.component';
import { EditarTipoInmuebleComponent } from './tipoInmueble/editar-tipo-inmueble/editar-tipo-inmueble.component';
import { EliminarTipoInmuebleComponent } from './tipoInmueble/eliminar-tipo-inmueble/eliminar-tipo-inmueble.component';
import { ListarInmuebleComponent } from './inmueble/listar-inmueble/listar-inmueble.component';
import { CrearInmuebleComponent } from './inmueble/crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './inmueble/editar-inmueble/editar-inmueble.component';
import { EliminarInmuebleComponent } from './inmueble/eliminar-inmueble/eliminar-inmueble.component';

const routes: Routes = [
  {
    path: 'listar-tipo-inmueble',
    component: ListarTipoInmuebleComponent,
  },
  {
    path: 'agregar-tipo-inmueble',
    component: CrearTipoInmuebleComponent,
  },
  {
    path: 'editar-tipo-inmueble/:id',
    component: EditarTipoInmuebleComponent,
  },
  {
    path: 'eliminar-tipo-inmueble/:id',
    component: EliminarTipoInmuebleComponent,
  },
  {
    path: 'listar-inmueble',
    component: ListarInmuebleComponent,
  },
  {
    path: 'agregar-inmueble',
    component: CrearInmuebleComponent,
  },
  {
    path: 'editar-inmueble/:id',
    component: EditarInmuebleComponent,
  },
  {
    path: 'eliminar-inmueble/:id',
    component: EliminarInmuebleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministracionRoutingModule {}
