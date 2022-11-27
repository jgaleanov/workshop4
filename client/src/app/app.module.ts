import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './pagina-maestra/encabezado/encabezado.component';
import { PiePaginaComponent } from './pagina-maestra/pie-pagina/pie-pagina.component';
import { InicioComponent } from './pagina-maestra/inicio/inicio.component';
import { ErrorComponent } from './pagina-maestra/error/error.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PiePaginaComponent,
    InicioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
