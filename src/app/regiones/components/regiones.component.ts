import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RegionesService } from '../services/regiones.service';

@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.css'],
})
export class RegionesComponent implements OnInit {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _service: RegionesService
  ) {}
  regiones: any = [];
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params: ParamMap): void => {
      this._service.getRegiones().subscribe((data: any[]): void => {
        this.regiones = data.filter(
          (region: any) => region.pais.nombre == params.get('pais')
        );
      });
    });
  }
}
