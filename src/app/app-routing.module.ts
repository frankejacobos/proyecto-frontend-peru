import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentosComponent } from './departamentos/components/departamentos.component';
import { DistritosComponent } from './distritos/components/distritos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaisesComponent } from './paises/components/paises.component';
import { ProvinciasComponent } from './provincias/components/provincias.component';
import { RegionesComponent } from './regiones/components/regiones.component';

const routes: Routes = [
  { path: '', redirectTo: '/paises', pathMatch: 'full' },
  { path: 'paises', component: PaisesComponent },
  { path: 'regiones/:pais', component: RegionesComponent },
  { path: 'departamentos/:region', component: DepartamentosComponent },
  { path: 'provincias/:departamento', component: ProvinciasComponent },
  { path: 'distritos/:provincia', component: DistritosComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
