import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DepartamentosService } from '../services/departamentos.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _service: DepartamentosService) { }
  departamentos: any = []
  ngOnInit(): void {
    this._activatedRoute.paramMap
      .subscribe((params: ParamMap): void => {
        this._service.getDepartamentos()
          .subscribe((data: any[]): void => {
            this.departamentos = data
              .filter((departamento: any) => departamento.region.nombre == params.get('region'))
          })
      })
  }
  encode(texto: string) { return texto.split(' ').join('-') }

}
