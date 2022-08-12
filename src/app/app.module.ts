import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenidoPrincipalComponent } from './contenido-principal/components/contenido-principal.component';
import { DepartamentosComponent } from './departamentos/components/departamentos.component';
import { DistritosComponent } from './distritos/components/distritos.component';
import { PaisesComponent } from './paises/components/paises.component';
import { ProvinciasComponent } from './provincias/components/provincias.component';
import { RegionesComponent } from './regiones/components/regiones.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaisesService } from './paises/services/paises.service';
import { RegionesService } from './regiones/services/regiones.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    PaisesComponent,
    RegionesComponent,
    DepartamentosComponent,
    ProvinciasComponent,
    DistritosComponent,
    ContenidoPrincipalComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [PaisesService, RegionesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
